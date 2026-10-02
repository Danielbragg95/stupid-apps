// Every spoken line. tools/bake-voices.mjs turns each one into audio/<who>-<group>-<i>.mp3
window.LINES = {
  gary: {
    chatter: [
      'Item one. Review of item one.',
      'Moving on to item two. Which is also item one.',
      'Per my last email.',
      "Let's circle back to the agenda.",
      'I will now read the agenda. Again.',
      "Can we take this offline? We are offline. Let's take it more offline.",
      "Let's put a pin in that. And in this. Pins everywhere.",
    ],
    cut: ['Sorry, let me stop you there.', "Let's park that.", 'Great point. Moving on.', "We're short on time."],
    yourTurn: ["Okay. Let's hear from you. You have the floor."],
    followup: ["Great meeting, everyone. Let's schedule a follow-up to discuss this meeting."],
  },
  chad: {
    chatter: [
      'Quick question, super quick, so basically going back to Q3, which ties into Q2, which honestly ties into Q1, which reminds me of a story.',
      'Just to piggyback on that, and on what I said before that, and before that.',
      'Sorry, go ahead. Actually, one more thing.',
      'Not to be that guy, but, and I am that guy.',
      'Love that. Love this. Love all of it. Quick question though.',
    ],
    cut: ['Oh, real quick!', 'Sorry, sorry, just jumping in!', 'Ooh, can I add to that?', "Before you finish, which you won't!"],
    share: ['Can everyone see my screen? Can you see it now? How about now?'],
    shareEnd: ['Okay, so that was the wrong tab. Anyway.'],
    skip: ["Okay, I'll go then."],
  },
  tina: {
    chatter: ['Yeah, no, totally.', 'Totally. Yeah. No.', 'No, yeah, a hundred percent.', 'Yes. Agreed. With everyone. Always.', 'Mm-hm. Mm-hm. Yeah, no.'],
    cut: ['Yeah, no, totally!', 'Totally, yeah, but no, but yeah!', "Agreed, with whoever's talking!"],
  },
  bot: {
    join: ["Hello. I am Gary's AI notetaker. This meeting is being recorded."],
    chatter: ['Summary so far: nothing.', 'Action item detected. Action item deleted.', 'Chad has said forty percent of all words.'],
    cut: ['Your audio is unclear. Please stop.'],
    end: ['Sorry. We are at time.'],
  },
  you: {
    cut: ['So I just wanted to—', 'Sorry, can I just—', 'Quick thing, I think we sh—', 'Hi, hello, I—', 'Sor—', 'I—'],
    final: ['Okay! So. I think the main thing is—'],
  },
};
