import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideas — Phil Carey",
  description:
    "Articles, opinion pieces, and writing by Phil Carey on AI, leadership, curiosity, and the changing nature of work.",
  alternates: { canonical: "https://philcarey.me/ideas" },
};

const articles = [
  {
    slug: "skills-on-the-rise-the-curiosity-lens",
    title: "Skills on the Rise: See Them Through the Curiosity Lens",
    date: "February 2026",
    category: "AI & Thinking",
    excerpt:
      "LinkedIn's 2026 Skills on the Rise list is worth a look. But the real edge is not what you know. It is how you think. Curiosity is not a soft skill. It is a competitive edge.",
  },
  {
    slug: "on-schedule-vs-on-track",
    title: "On Schedule vs On Track: The Most Important Question You'll Ask All Year",
    date: "February 2026",
    category: "Strategy",
    excerpt:
      "Being on schedule means activity is happening. Being on track means the activity is taking you where you need to go. AI makes the gap harder to recognise.",
  },
  {
    slug: "ai-is-a-mirror-not-a-replacement",
    title: "AI Is a Mirror, Not a Replacement",
    date: "February 2026",
    category: "Work & AI",
    excerpt:
      "Anthropic launched a tool designed to automate large parts of legal work. Share prices fell. Fears resurfaced. Here is what is important to remember if you are worried about losing your role to AI.",
  },
  {
    slug: "stop-looking-for-a-roadmap",
    title: "Stop Looking for a Roadmap. Start With a Compass.",
    date: "January 2026",
    category: "Leadership",
    excerpt:
      "People keep trying to apply sat-nav logic to AI. Tell me the destination. Give me the roadmap. Show me the steps. But here is the problem.",
  },
  {
    slug: "know-yourself-before-you-know-ai",
    title: "Know Yourself Before You Know AI",
    date: "January 2026",
    category: "Self-awareness",
    excerpt:
      "The real reason people are skilling up in AI this year is to stay ahead. But only a few will succeed. The difference is not about prompts. It is about self-awareness.",
  },
];

const BASE = "https://www.cornerstonemedia.com.au/blog";

export default function Ideas() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <div style={{ paddingTop: "8rem", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ paddingBottom: "4rem" }}>
          <div className="kicker" style={{ marginBottom: "1.5rem" }}>Ideas</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 0.98, letterSpacing: "-0.025em", color: "var(--ink)", marginBottom: "1rem" }}>
            Writing
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: "52ch" }}>
            Articles, opinion pieces, and thinking on AI, leadership, and
            the changing nature of work. Published on{" "}
            <a href="https://www.cornerstonemedia.com.au/blog" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
              Cornerstone Media
            </a>
            .
          </p>
        </div>
      </div>

      {/* ── ARTICLE LIST ─────────────────────────────────────── */}
      <div className="wrap" style={{ paddingBlock: "4rem" }}>
        {articles.map((article, i) => (
          <article
            key={article.slug}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: "2rem",
              paddingBlock: "3rem",
              borderBottom: i < articles.length - 1 ? "1px solid var(--line)" : "none",
            }}
          >
            {/* Date + category */}
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "0.4rem" }}>
                {article.date}
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>
                {article.category}
              </p>
            </div>

            {/* Content */}
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink)", marginBottom: "0.75rem" }}>
                <a
                  href={`${BASE}/${article.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--ink)")}
                >
                  {article.title}
                </a>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.6, color: "var(--ink-soft)", marginBottom: "1rem" }}>
                {article.excerpt}
              </p>
              <a
                href={`${BASE}/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="alink"
              >
                <span className="u">Read on Cornerstone Media</span>
                <span className="arw">&rarr;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
