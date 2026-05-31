export interface App {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string[];
}

export const apps: App[] = [
  {
    slug: "client-intelligence-system",
    title: "Client Intelligence System",
    category: "Client ops",
    tagline: "A daily briefing on every client relationship, drafted and ready.",
    description: [
      "Most business owners know they should stay in better contact with clients. They just don't know who to call, what to say, or where to start. The Client Intelligence System solves that problem, not by managing your contacts, but by thinking alongside you.",
      "Every morning, it shows you exactly who has gone quiet for too long, why that matters, and what to say to them. Not a list of names. A briefing. The kind of briefing a sharp assistant would prepare if they had read every email you had ever sent, tracked every project you had run, and understood how each client relationship had evolved over time.",
      "The system watches your inbox continuously, capturing signals from real conversations, pulling out what is relevant, and building a living picture of every client relationship in your portfolio. When a contact resurfaces, you already know the context. When a project stalls, the system surfaces it. When a pattern emerges across your pipeline, the Global Intelligence Advisor can see it, because it holds everything.",
      "Most tools record what happened. This one helps you think about what to do next. When you sit down to reach out to someone, the system has already drafted the email in your voice, pulled the most recent signal from that relationship, and opened Gmail to the right account. Your job is to read it, refine it if you want, and send it.",
      "Better information. Better questions. Better decisions. That is how it works.",
    ],
  },
  {
    slug: "throughline",
    title: "Throughline",
    category: "Communication",
    tagline: "Four questions that turn your work into a story people act on.",
    description: [
      "Most professionals know their work matters. Few can explain why in a way that moves anyone to act. That gap costs businesses more than they realise. Deals that stall. Proposals that get shelved. Ideas that never find the room they deserve. Not because the work was wrong, but because the story behind it never landed.",
      "Throughline is built on a simple insight from award-winning medical communicator Sophie Scott OAM: the human brain does not process information the way a spreadsheet does. It processes story. When you give it a story, it pays attention, remembers, and decides.",
      "The app guides you through Sophie's evidence-based storytelling framework, step by step. You identify the world before your solution existed. The disruption that created the need. The chain of consequences that followed. And the new world your work makes possible. Four questions. Precisely ordered. Each one forces you to think one level deeper than you were comfortable going before.",
      "The AI works as a thinking partner, not a grammar checker. It reads your story for structural integrity, emotional clarity, and persuasive logic. It scores it. It shows you specifically where the reasoning weakens or the humanity disappears. You iterate. Each pass produces a tighter argument and a clearer mind.",
      "Throughline does not teach you to write. It teaches you to think clearly enough that good communication becomes the natural result.",
    ],
  },
  {
    slug: "the-key-and-the-plate",
    title: "The Key & The Plate",
    category: "Leadership diagnostic",
    tagline: "A 15-minute assessment of your AI leadership pattern.",
    description: [
      "Most leaders approach AI the same way: more tools, more speed, more output. The result is burned-out teams and decisions made without real clarity. The Key & The Plate flips that script.",
      "It is a 15-minute interactive experience that helps you discover your unique AI leadership pattern and understand how you are actually thinking about your team's work. The difference matters because clearer thinking about leadership creates better decisions. Better decisions compound into better team culture. Better team culture builds stronger, more sustainable businesses.",
      "Instead of generic advice, you get insights grounded in research about how leaders respond to the pressure of AI adoption. You learn your pattern, the way you naturally lead, then you see specifically where burnout risk hides in that pattern and how to design work differently to prevent it.",
      "The result is not a checklist. It is a shift in how you see your team's work. You understand the real levers: not the AI adoption itself, but how you structure decisions, delegate, and protect space for thinking in a world that is rewarding speed over depth.",
      "Teams led by leaders who have worked through this pattern see the difference: less burnout, more trust, better decisions. Because you are not fighting the AI era. You are leading thoughtfully through it.",
    ],
  },
  {
    slug: "simple-signals",
    title: "Simple Signals",
    category: "Self-awareness",
    tagline: "Two minutes of self-observation. Patterns that make you smarter.",
    description: [
      "Most business owners are brilliant at reading their market, their team, their competition. The one thing they rarely read clearly is themselves. Not because they are not self-aware. Because nobody ever showed them their own data.",
      "Simple Signals does one thing well. It helps you notice what is actually happening in your day: what you are feeling, what is influencing it, and how intense it is. Two minutes. Three times a day. Honest answers.",
      "After seven days, something shifts. You start to see patterns you genuinely could not see before. The conditions under which you think most clearly. The triggers that cloud your judgement before a big decision. The times of day when your energy is real versus when you are running on habit.",
      "That information does not just make you feel better. It makes you smarter. Because the quality of every decision you make, every conversation you lead, every strategy you build, sits directly on top of your emotional state.",
      "This is not journalling. It is not therapy. It is pattern recognition from your own life, presented back to you in a way that is genuinely useful.",
    ],
  },
  {
    slug: "personal-command-centre",
    title: "Personal Command Centre",
    category: "Productivity",
    tagline: "One screen every morning. Everything that matters, in the right order.",
    description: [
      "Most people start the day behind. They open their phone and immediately split their attention across five apps, three notifications and a shopping list they wrote at midnight. By 9am they are reactive, not intentional.",
      "Personal Command Centre fixes the start of the day before the day fixes you. Open it each morning and you see one screen. Business tasks at the top, colour-coded so the work that pays the bills is never buried under a reminder to buy milk. Projects with their progress and target dates. Ideas you captured before they disappeared. Your shopping list. What to watch tonight. All of it, without switching apps or hunting through notifications.",
      "When you do not have to hold things in your head, your head is free to think. When your priorities are visible in the right order, your decisions get faster and cleaner. When you finish each day with a single tap that moves everything unfinished to tomorrow, you close the loop instead of carrying it into dinner.",
      "Ten seconds each morning. One screen. A clearer head for everything that follows.",
    ],
  },
  {
    slug: "careobs",
    title: "CareObs",
    category: "Aged care",
    tagline: "Structured observation for aged care that gives nurses back their thinking time.",
    description: [
      "Most aged care systems have been built on an assumption nobody examined. That experienced nurses should spend their most valuable hours recording what they already know, twice, before it becomes useful. Two to three hours every shift. Not lost to administration. Stolen from thinking.",
      "On a shift where attention is fractured by paperwork, the signals that matter most are the first things missed. Fluid intake dropping. Skin condition changing. Mobility narrowing quietly over days. These are the patterns that lead to better interventions, fewer preventable incidents, and residents who stay healthier longer. But they only surface when someone has the mental space to see them.",
      "CareObs gives that space back. Observation that takes minutes guides care workers through six structured steps at the point of care, with voice input keeping their attention on the person in front of them. Every field autosaves. Interruptions do not cost data.",
      "Mandatory reportable events flag at the point of care, timestamped and audited, with no way for critical alerts to slip through unacknowledged. The Royal Commission requirements are not a checklist the facility ticks at month end. They are how the work happens every shift.",
      "Fewer preventable adverse events mean better quality measures. Better quality means better government standing, better staff retention, and residents who notice the difference between a care worker who has time to pay attention and one who is rushing between observation sheets.",
    ],
  },
  {
    slug: "feel-happy",
    title: "How to Feel Happy When You Feel Crappy",
    category: "Wellbeing",
    tagline: "Three evidence-based tools to shift your brain state in under 20 minutes.",
    description: [
      "Most productivity advice assumes you are already at your best. This app starts from where you actually are. On days when your energy is low, your thinking narrows. Cortisol rises, working memory shrinks, and the quality of your decisions drops. Research is clear on this. A stressed brain is not a strategic brain.",
      "This app gives you three evidence-based tools that shift your brain state quickly, without a therapist, a gym membership, or an hour to spare. Each tool is drawn from peer-reviewed science and takes less than twenty minutes.",
      "Affirmations reduce cortisol directly. When your stress response is quieter, your prefrontal cortex, the part of your brain responsible for judgment, planning, and creative problem-solving, comes back online.",
      "Changing your environment restores directed attention. Blue spaces and natural settings reset a fatigued brain in ways that screens and indoor environments cannot. A fifteen-minute shift in surroundings produces measurable improvements in focus and clarity.",
      "Mindful movement activates the default mode network, the part of the brain where insight lives. Your best ideas do not arrive when you are grinding at a desk. They arrive on a walk, in the shower, staring out a window. Movement is not recovery from work. It is part of the work.",
      "You open it when you are struggling. You close it ready to think clearly again.",
    ],
  },
  {
    slug: "sector-rotation-signal-tracker",
    title: "Sector Rotation Signal Tracker",
    category: "Investing",
    tagline: "Five sectors. Five leading indicators. One daily signal before the news confirms it.",
    description: [
      "Most investors react to sector moves after they happen. Headlines confirm what already played out in price. The Sector Rotation Signal Tracker moves earlier by reading five leading indicators daily and scoring them across five sectors: Energy, Industrials, Semiconductors and AI Infrastructure, Materials and Commodities, and Financials.",
      "Each indicator in each sector is scored bullish, neutral, or bearish. The five scores are weighted by their historical correlation to actual sector returns and combined into a single composite that drives the buy, sell, or hold signal. The rotation view shows all five sectors side by side so you see not just whether energy looks bullish, but whether energy is the strongest opportunity relative to the others right now.",
      "Capital rotates. When money moves, seeing the signals together shows you the direction of that flow before price fully reflects it. For an investor, a BUY signal on energy means the weight of evidence across five leading indicators points to sector strength. The signal is the same across markets. The vehicle is yours — an ASX energy ETF, Woodside, Santos, or XLE depending on where you trade.",
      "The dashboard takes under 30 seconds to read. One ring per sector. One line of plain English below it. Open the drawer if you want to see what is driving the signal. Close it and act if you do not.",
      "It scans live data every time you run it, not cached summaries. It evaluates indicators that lead price, not lag it. Weights are calibrated against historical correlations between each indicator and actual sector returns. It shows signal trend over time, not just today, so you can see whether a BUY signal is strengthening or fading.",
      "This is not financial advice and it is not a trading system. It is a structured daily briefing that replaces scattered news reading with a consistent, evidence-based framework. The signals are a starting point for your thinking, not a substitute for it.",
    ],
  },
];
