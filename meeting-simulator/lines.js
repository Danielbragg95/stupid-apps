// Every spoken line. tools/bake-voices.mjs turns each one into audio/<who>-<group>-<i>.mp3
// Add new lines at the END of a list: clip files are named by position.
window.LINES = {
  "gary": {
    "chatter": [
      "Item one. Review of item one.",
      "Moving on to item two. Which is also item one.",
      "Per my last email.",
      "Let's circle back to the agenda.",
      "I will now read the agenda. Again.",
      "Can we take this offline? We are offline. Let's take it more offline.",
      "Let's put a pin in that. And in this. Pins everywhere.",
      "Item three is a recap of items one and two. Item one.",
      "I'll share the deck after. There is no deck.",
      "Let's double click on that. Then single click. Then double click again.",
      "As per the agenda, which I am reading, and you are not.",
      "We'll take the rest async. Right now. Out loud.",
      "Can everyone go on mute. Except me. And Chad, apparently.",
      "Let us table this. And then un-table it. And then table it.",
      "Hard stop at the top of the hour. Of some hour.",
      "Before we begin, a quick recap of the last forty three minutes. We began.",
      "I've added a few items to the agenda. Thirty. I've added thirty.",
      "Can someone take notes. Not the robot. A person. Any person. Not you.",
      "Let us align on the alignment.",
      "Reminder that this meeting could have been an email. That email would have been this meeting.",
      "I'm going to read the next slide word for word. Slide four. Words."
    ],
    "cut": [
      "Sorry, let me stop you there.",
      "Let's park that.",
      "Great point. Moving on.",
      "We're short on time.",
      "Let's take that offline.",
      "That's a great question for a different meeting.",
      "I'm going to stop you, for time.",
      "Hold that thought. Forever.",
      "Let's save questions for the end. There is no end."
    ],
    "yourTurn": [
      "Okay. Let's hear from you. You have the floor."
    ],
    "followup": [
      "Great meeting, everyone. Let's schedule a follow-up to discuss this meeting."
    ],
    "share": [
      "Can everyone see my monitor? I have two monitors. You are seeing the wrong one."
    ],
    "forecast": [
      "Slide one of ninety four. The forecast. The forecast says: forecast.",
      "Our forecast is flat. Flat is the new up.",
      "This slide is intentionally left blank. Let's discuss it for twenty minutes.",
      "Let me read this pie chart to you. Slice. Slice. Slice. Slice.",
      "I'll skip ahead. Slide two of ninety four."
    ],
    "see": [
      "We can see your monitor, Tina. And the beach. Mostly the beach."
    ],
    "mute": [
      "You're on mute.",
      "I think you're on mute. Still on mute. Yep. Mute."
    ]
  },
  "chad": {
    "chatter": [
      "Quick question, super quick, so basically going back to Q3, which ties into Q2, which honestly ties into Q1, which reminds me of a story.",
      "Just to piggyback on that, and on what I said before that, and before that.",
      "Sorry, go ahead. Actually, one more thing.",
      "Not to be that guy, but, and I am that guy.",
      "Love that. Love this. Love all of it. Quick question though.",
      "Sorry, I'm driving. Can you all hear me? I'm going into a tunnel. Still talking though.",
      "Big picture? Let me zoom out. Let me zoom out more. Okay, now I am in space.",
      "Hot take, but what if we just did what we said last week, but louder.",
      "I'm just thinking out loud here, for the next eleven minutes.",
      "Can we get a quick pulse check? Thumbs up. Okay, I'll take silence as a yes.",
      "Sorry, my dog. No, that was me. I'm excited.",
      "Ooh, let me play devil's advocate. And then angel's advocate. And then my own advocate.",
      "Real quick, does anyone know how to turn off this cat filter? I don't have a cat.",
      "I'd love to circle back on circling back.",
      "Okay, so I made a framework. It's called the Chad framework. Step one: me.",
      "Sorry, I'm on the bridge right now. Like the actual bridge. The views are incredible. Anyway, Q4.",
      "Can I just say, and I mean this, love the energy. Whose energy? Mine.",
      "Quick question, and then a follow-up question, and then the question I actually wanted to ask.",
      "I put a calendar hold on everyone's calendar for this weekend. Just a hold. A soft hold. It's mandatory.",
      "Wait, is this being recorded? Great. Hi, future people. Chad here."
    ],
    "cut": [
      "Oh, real quick!",
      "Sorry, sorry, just jumping in!",
      "Ooh, can I add to that?",
      "Before you finish, which you won't!",
      "Wait, wait, wait, wait, wait!",
      "Yes! And! Also! Me!",
      "Sorry, you cut out. So anyway, me!",
      "Totally, and to build on that, scrap it!",
      "Hey, sorry, you're breaking up. Not literally. Okay, me."
    ],
    "share": [
      "Can everyone see my screen? Can you see it now? How about now?"
    ],
    "shareEnd": [
      "Okay, so that was the wrong tab. Anyway."
    ],
    "skip": [
      "Okay, I'll go then."
    ],
    "forecast": [
      "Okay so this is the forecast. Column B is revenue. Column C is vibes.",
      "As you can see, we are projected to grow forty percent. Of what? Great question. Moving on.",
      "This cell says REF error. That's actually our best performing cell.",
      "If we just drag this row down forever, we're a billion dollar company.",
      "I color coded it. Green is good. Red is also good. It's a mindset.",
      "Ignore the cat. The cat is our Q4 strategy."
    ],
    "see": [
      "Yep, we see it! Ooh, can I share mine again instead?",
      "I see it! Wait, no, that's my screen."
    ],
    "mute": [
      "Dude, you're on mute! Classic!",
      "You're on mute, bro. Now you're unmuted. Now you're muted again."
    ]
  },
  "tina": {
    "chatter": [
      "Yeah, no, totally.",
      "Totally. Yeah. No.",
      "No, yeah, a hundred percent.",
      "Yes. Agreed. With everyone. Always.",
      "Mm-hm. Mm-hm. Yeah, no.",
      "Yeah. No. Yeah. Sorry, which one did I say?",
      "Plus one. Plus two. Plus one to my plus one.",
      "Oh, for sure, for sure, for sure.",
      "Love that for us.",
      "No, totally, I was going to say the exact same thing. Word for word. Which was. Yeah.",
      "Agreed! Wait. What did we agree on? Agreed.",
      "Sorry, I was on mute. I said yeah.",
      "I'm on the beach, but I'm super locked in. Yeah, no, totally.",
      "Yes. And. Yes. And also. Yes.",
      "No, I love that. Wait, are we talking about the thing? Love the thing.",
      "Sorry, there's a seagull. He also agrees.",
      "Totally aligned. Totally synced. Totally, totally, totally."
    ],
    "cut": [
      "Yeah, no, totally!",
      "Totally, yeah, but no, but yeah!",
      "Agreed, with whoever's talking!",
      "Oh my gosh, same!",
      "Yes! What they said! Not you. Them!",
      "Sorry! Yeah! Totally! Continue! Not you!"
    ],
    "share": [
      "Can you see my monitor? Is it showing the beach? Sorry, that's just my actual monitor."
    ],
    "forecast": [
      "So the graph goes up! And to the right! Yeah, no, totally!",
      "I don't know what the line means, but I agree with it.",
      "The forecast is sunny! Sorry, wrong forecast. Also sunny!",
      "I drew this line myself. It's a hockey stick. I love hockey."
    ],
    "see": [
      "Yeah, no, I can see it. Totally. No. What am I looking at?",
      "I see a cat. Is the cat the forecast?"
    ],
    "mute": [
      "Oh, you're on mute! Yeah, no, totally on mute.",
      "You're on mute! We can't hear you! Yeah!"
    ]
  },
  "bot": {
    "join": [
      "Hello. I am Gary's AI notetaker. This meeting is being recorded."
    ],
    "chatter": [
      "Summary so far: nothing.",
      "Action item detected. Action item deleted.",
      "Chad has said forty percent of all words.",
      "Chad is now at sixty percent of all words.",
      "Sentiment analysis: everyone agrees. Nobody knows with what.",
      "Note to self: the user has not spoken. Marking user as a plant.",
      "Updating minutes. Minutes: many.",
      "Detected the word synergy. Increasing synergy.",
      "Reminder: this is a one on one. There are five of us.",
      "Translating Chad into English. Error. No content found.",
      "Detected fire in the user's background. Marking as low priority."
    ],
    "cut": [
      "Your audio is unclear. Please stop.",
      "Background noise detected. The background noise is you."
    ],
    "end": [
      "Sorry. We are at time."
    ],
    "forecast": [
      "Forecast accuracy, historically: zero percent.",
      "Detected hockey stick graph. Probability of hockey: low."
    ],
    "mute": [
      "Participant called You is on mute. Participant called You has always been on mute."
    ]
  },
  "you": {
    "cut": [
      "So I just wanted to—",
      "Sorry, can I just—",
      "Quick thing, I think we sh—",
      "Hi, hello, I—",
      "Sor—",
      "I—",
      "Could I just quickly—",
      "Sorry, to go back to—",
      "Can everyone hear m—",
      "Okay so, about my—",
      "Just a quick—",
      "Hey, so the house is on f—",
      "Sorry, I think my room is—",
      "Is anyone else seeing the fl—"
    ],
    "final": [
      "Okay! So. I think the main thing is—"
    ]
  }
};
