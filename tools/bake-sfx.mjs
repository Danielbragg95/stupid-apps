// Pre-bake ElevenLabs sound effects for an app's sfx.json ({ name: { text, seconds, loop? } }).
// Usage: node tools/bake-sfx.mjs engagement-slots            (dry run: counts credits, spends nothing)
//        node tools/bake-sfx.mjs engagement-slots --go       (generates missing clips; --force redoes all)
// Key comes from ELEVENLABS_API_KEY, or the ELEVENLABS_API_KEY line of .env.local (or --env=<file>). Never printed.
import fs from 'node:fs';
import path from 'node:path';

const [app, ...flags] = process.argv.slice(2);
if (!app) throw new Error('Usage: node tools/bake-sfx.mjs <app-folder> [--go] [--force] [--env=<file>]');
const go = flags.includes('--go'), force = flags.includes('--force');
const envFile = flags.find(f => f.startsWith('--env='))?.slice(6) ?? '.env.local';
const CREDITS_PER_SECOND = 20; // API price when duration_seconds is set

const list = JSON.parse(fs.readFileSync(path.join(app, 'sfx.json'), 'utf8'));
const outDir = path.join(app, 'audio');
fs.mkdirSync(outDir, { recursive: true });
const jobs = Object.entries(list).filter(([name]) => force || !fs.existsSync(path.join(outDir, `${name}.mp3`)));
const credits = jobs.reduce((n, [, s]) => n + s.seconds * CREDITS_PER_SECOND, 0);
console.log(`${jobs.length} sound effects to bake, about ${credits} credits.`);
if (!go) { console.log('Dry run. Add --go to generate.'); process.exit(0); }

let key = process.env.ELEVENLABS_API_KEY;
if (!key && fs.existsSync(envFile))
  key = fs.readFileSync(envFile, 'utf8').match(/^ELEVENLABS_API_KEY=(.+)$/m)?.[1].trim().replace(/^["']|["']$/g, '');
if (!key) throw new Error(`ELEVENLABS_API_KEY is not set (env or ${envFile}).`);

for (const [name, s] of jobs) {
  const res = await fetch('https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128', {
    method: 'POST',
    headers: { 'xi-api-key': key, 'content-type': 'application/json' },
    body: JSON.stringify({ text: s.text, duration_seconds: s.seconds, prompt_influence: 0.5, ...(s.loop ? { loop: true } : {}) }),
  });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
  fs.writeFileSync(path.join(outDir, `${name}.mp3`), Buffer.from(await res.arrayBuffer()));
  console.log(`baked ${name}.mp3`);
}
console.log('Done.');
