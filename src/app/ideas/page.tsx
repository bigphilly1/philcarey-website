import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ideas — Phil Carey",
  description:
    "Articles, opinion pieces, and writing by Phil Carey on AI, leadership, curiosity, and the changing nature of work.",
  alternates: { canonical: "https://philcarey.me/ideas" },
};

// Article data — replace with CMS/MDX when scaling
const articles = [
  {
    slug: "the-question-behind-the-question",
    title: "The question behind the question",
    date: "May 2025",
    category: "AI & Thinking",
    excerpt:
      "Every question contains a frame. A belief, an assumption, an emotional lean. Most people never examine the frame. AI makes it visible in ways nothing else quite does.",
  },
  {
    slug: "ai-took-the-task",
    title: "AI took the task. Your judgment remained.",
    date: "April 2025",
    category: "Work & AI",
    excerpt:
      "A graphic designer lost a pitch last month. Not because her work was not good enough. She never got to show it. The adaptation most professionals need is not about speed.",
  },
  {
    slug: "the-curious-leader",
    title: "The one question that changes the room",
    date: "March 2025",
    category: "Leadership",
    excerpt:
      "Satya Nadella walked into a Microsoft leadership meeting in 2014 and asked a single question. The answer defined the next decade of the company.",
  },
];

export default function Ideas() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <div className="pt-32 pb-0 border-b border-rule-line">
        <div className="max-w-wide mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-x-8 pb-16">
            <div className="md:col-span-3">
              <p className="font-sans text-sm uppercase tracking-widest text-charcoal-light mt-2">
                Ideas
              </p>
            </div>
            <div className="md:col-span-8">
              <h1
                className="font-serif font-black text-charcoal leading-none mb-4"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Writing
              </h1>
              <p className="font-sans text-base text-charcoal-mid leading-relaxed max-w-prose">
                Articles, opinion pieces, and thinking on AI, leadership, and
                the changing nature of work. Updated regularly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── ARTICLE LIST ─────────────────────────────────────── */}
      <div className="max-w-wide mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-x-8">
          <div className="md:col-span-9 md:col-start-4 space-y-0">
            {articles.map((article, i) => (
              <article
                key={article.slug}
                className={`grid md:grid-cols-9 gap-x-8 gap-y-4 py-12 ${
                  i < articles.length - 1 ? "border-b border-rule-line" : ""
                }`}
              >
                {/* Date + category */}
                <div className="md:col-span-2">
                  <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light">
                    {article.date}
                  </p>
                  <p className="font-sans text-xs text-terracotta mt-1">
                    {article.category}
                  </p>
                </div>

                {/* Content */}
                <div className="md:col-span-7">
                  <h2 className="font-serif font-bold text-xl text-charcoal leading-snug mb-3">
                    <Link
                      href={`/ideas/${article.slug}`}
                      className="hover:text-terracotta transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="font-sans text-base text-charcoal-mid leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/ideas/${article.slug}`}
                    className="font-sans text-sm text-terracotta uppercase tracking-widest hover:text-terracotta-dark transition-colors"
                  >
                    Read &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
