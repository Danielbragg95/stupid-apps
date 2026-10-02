// Pre-bake ElevenLabs clips for an app's lines.js.
// Usage: node tools/bake-voices.mjs meeting-simulator          (dry run: counts characters, spends nothing)
//        node tools/bake-voices.mjs meeting-simulator --go     (generates missing clips; --force redoes all)
// Key comes from ELEVENLABS_API_KEY or .env.local. It is never printed.
import fs from 'node:fs';
import path from 'node:path';

const [app, ...flags] = process.argv.slice(2);
if (!app) throw new Error('Usage: node tools/bake-voices.mjs <app-folder> [--go] [--force]');
const go = flags.includes('--go'), force = flags.includes('--force');

// Premade ElevenLabs voices. Stability: high = flat, low = expressive.
const VOICES = {
  gary: { id: 'nPczCjzI2devNBz1zQrb', stability: 1.0,  style: 0 },   // Brian: the monotone agenda reader
  chad: { id: 'TX3LPaxmHKxFdv7VOQHJ', stability: 0.25, style: 0.6 }, // Liam: "quick question"
  tina: { id: 'cgSgspJ2msm6clMCkdW9', stability: 0.35, style: 0.5 }, // Jessica: yeah, no, totally
  bot:  { id: 'pqHfZKP75CVOlQylNhV4', stability: 1.0,  style: 0 },   // Bill: the AI notetaker
  you:  { id: 'iP95p4xoKVk53GoZ742B', stability: 0.5,  style: 0.3 }, // Chris: you, trying
};
const MODEL = 'eleven_multilingual_v2';

const window = {};
new Function('window', fs.readFileSync(path.join(app, 'lines.js'), 'utf8'))(window);
const outDir = path.join(app, 'audio');
fs.mkdirSync(outDir, { recursive: true });

const jobs = [];
for (const who in window.LINES) for (const group in window.LINES[who])
  window.LINES[who][group].forEach((text, i) => {
    const file = path.join(outDir, `${who}-${group}-${i}.mp3`);
    if (force || !fs.existsSync(file)) jobs.push({ who, text, file });
  });
const chars = jobs.reduce((n, j) => n + j.text.length, 0);
console.log(`${jobs.length} clips to bake, ${chars} characters (about ${chars} credits on ${MODEL}).`);
if (!go) { console.log('Dry run. Add --go to generate.'); process.exit(0); }

let key = process.env.ELEVENLABS_API_KEY;
if (!key && fs.existsSync('.env.local'))
  key = fs.readFileSync('.env.local', 'utf8').replace(/^﻿/, '').match(/^ELEVENLABS_API_KEY=(.+)$/m)?.[1].trim();
if (!key) throw new Error('ELEVENLABS_API_KEY is not set (env or .env.local).');

for (const { who, text, file } of jobs) {
  const v = VOICES[who];
  if (!v) throw new Error(`No voice configured for "${who}".`);
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${v.id}?output_format=mp3_44100_64`, {
    method: 'POST',
    headers: { 'xi-api-key': key, 'content-type': 'application/json' },
    body: JSON.stringify({ text, model_id: MODEL, voice_settings: { stability: v.stability, similarity_boost: 0.75, style: v.style } }),
  });
  if (!res.ok) throw new Error(`${path.basename(file)}: HTTP ${res.status} ${(await res.text()).slice(0, 200)}`);
  fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  console.log(`baked ${path.basename(file)}`);
}
console.log('Done.');
