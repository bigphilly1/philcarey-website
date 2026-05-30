import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Phil Carey — AI Strategist, Author, Corporate Media Producer",
  description:
    "Phil Carey makes things. Videos, tools, books, ideas. AI strategist, author of The Curiosity Advantage, and Creative Director of Cornerstone Media. Based in Sydney, Australia.",
  alternates: { canonical: "https://philcarey.me" },
};

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center pt-16">
        <div className="max-w-wide mx-auto px-6 md:px-12 w-full">
          <div className="grid md:grid-cols-12 gap-8 items-start py-12 md:py-16">

            {/* Left: headline + subheadline + buttons */}
            <div className="md:col-span-7 flex flex-col justify-start">
              <h1 className="font-slab font-bold text-charcoal mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: "1.4", letterSpacing: "0.02em" }}>
                &ldquo;Amazing doors open when human and computer work
                together.&rdquo;
              </h1>

              <p className="font-sans text-lg md:text-xl text-charcoal-mid leading-relaxed max-w-prose mb-10">
                Videos, AI tools, books, ideas. He is the author of{" "}
                <em className="font-serif">The Curiosity Advantage</em>, Creative
                Director of Cornerstone Media, and an independent AI consultant
                working with leaders across Australia. The craft behind the
                thinking has been more than thirty years in the making.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-block bg-terracotta text-cream font-sans text-sm uppercase tracking-widest px-7 py-3.5 hover:bg-terracotta-dark transition-colors"
                >
                  Read the book
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border border-charcoal text-charcoal font-sans text-sm uppercase tracking-widest px-7 py-3.5 hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  Start a conversation
                </Link>
              </div>
            </div>

            {/* Right: portrait + name */}
            <div className="md:col-span-4 md:col-start-9 md:pb-4 flex flex-col gap-5">
              {/* Square portrait */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src="/phil-carey.jpg"
                  alt="Phil Carey"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Name + tagline under image */}
              <h1 className="font-serif leading-snug" style={{ fontSize: "20pt" }}>
                <span className="font-bold text-charcoal block">
                  Phil Carey
                </span>
                <span className="italic font-normal text-charcoal-mid block">
                  creates things.
                </span>
              </h1>
            </div>

          </div>
        </div>

        {/* Ruled divider */}
        <div className="border-t border-rule-line" />
      </section>

      {/* ── WHAT PHIL DOES ───────────────────────────────────── */}
      <section className="section-gap">
        <div className="max-w-wide mx-auto px-6 md:px-12">

          <div className="grid md:grid-cols-12 gap-x-8 gap-y-12">

            {/* Section label */}
            <div className="md:col-span-3">
              <p className="font-sans text-sm uppercase tracking-widest text-charcoal-light">
                The work
              </p>
            </div>

            {/* Three areas */}
            <div className="md:col-span-9 grid md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  title: "AI Strategy",
                  body:
                    "Helping organisations think more clearly about artificial intelligence, and building the tools to prove it. Phil does not just advise on AI. He builds with it, designing bespoke solutions at the intersection of communication and process.",
                  href: "/work",
                },
                {
                  title: "The Book",
                  body:
                    "The Curiosity Advantage argues that your experience of AI depends less on the technology and more on the mind you bring to it. Better questions produce better futures.",
                  href: "/book",
                },
                {
                  title: "Cornerstone Media",
                  body:
                    "Three decades writing, directing, and producing corporate video for some of Australia's most recognised organisations. The craft underpins everything.",
                  href: "/work#cornerstone",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h2 className="font-serif font-bold text-xl text-charcoal mb-4">
                    {item.title}
                  </h2>
                  <p className="font-sans text-base text-charcoal-mid leading-relaxed mb-4">
                    {item.body}
                  </p>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-terracotta uppercase tracking-widest hover:text-terracotta-dark transition-colors"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── BOOK FEATURE ─────────────────────────────────────── */}
      <section className="border-t border-rule-line section-gap bg-cream-dark">
        <div className="max-w-wide mx-auto px-6 md:px-12">

          <div className="grid md:grid-cols-12 gap-x-8 gap-y-10 items-center">

            <div className="md:col-span-5">
              {/* Book cover */}
              <div
                className="w-full relative aspect-[3/4] shadow-2xl"
                style={{ maxWidth: "320px" }}
              >
                <Image
                  src="/book-cover.jpg"
                  alt="The Curiosity Advantage by Phil Carey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-6">
                Now available
              </p>
              <h2 className="font-serif font-black text-charcoal leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                The Curiosity<br />
                <span className="italic font-normal">Advantage</span>
              </h2>
              <p className="font-sans text-base text-charcoal-mid leading-relaxed mb-6 max-w-prose">
                How Better Questions Create Better Futures in the Age of AI.
              </p>
              <p className="font-sans text-base text-charcoal-mid leading-relaxed mb-8 max-w-prose">
                The question is the lever. The future is the lift. This is not a
                book about prompts. It is about the psychology of working with AI
                as a thinking partner, and what becomes possible when curiosity
                drives the conversation.
              </p>
              <Link
                href="/book"
                className="inline-block bg-terracotta text-cream font-sans text-sm uppercase tracking-widest px-7 py-3.5 hover:bg-terracotta-dark transition-colors"
              >
                About the book
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── IDEAS TEASER ─────────────────────────────────────── */}
      <section className="border-t border-rule-line section-gap">
        <div className="max-w-wide mx-auto px-6 md:px-12">

          <div className="grid md:grid-cols-12 gap-x-8 gap-y-10">
            <div className="md:col-span-3">
              <p className="font-sans text-sm uppercase tracking-widest text-charcoal-light mb-1">
                Ideas
              </p>
              <Link
                href="/ideas"
                className="font-sans text-sm text-terracotta uppercase tracking-widest hover:text-terracotta-dark transition-colors"
              >
                All writing &rarr;
              </Link>
            </div>

            <div className="md:col-span-9 grid md:grid-cols-2 gap-8">
              {ideasPreview.map((piece) => (
                <article key={piece.slug} className="border-t border-rule-line pt-6">
                  <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light mb-3">
                    {piece.date}
                  </p>
                  <h3 className="font-serif font-bold text-lg text-charcoal leading-snug mb-3">
                    <Link
                      href={`/ideas/${piece.slug}`}
                      className="hover:text-terracotta transition-colors"
                    >
                      {piece.title}
                    </Link>
                  </h3>
                  <p className="font-sans text-sm text-charcoal-mid leading-relaxed">
                    {piece.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-rule-line section-gap bg-charcoal">
        <div className="max-w-wide mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif font-black text-cream leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            Start a conversation.
          </h2>
          <p className="font-sans text-cream/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Phil works with executives, boards, and leadership teams who want to
            think more clearly about AI. If that sounds like the conversation
            you need, get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-cream text-cream font-sans text-sm uppercase tracking-widest px-8 py-4 hover:bg-cream hover:text-charcoal transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

// Preview data — replace with CMS/MDX when ideas content is ready
const ideasPreview = [
  {
    slug: "the-question-behind-the-question",
    title: "The question behind the question",
    date: "May 2025",
    excerpt:
      "Every question contains a frame. A belief, an assumption, an emotional lean. Most people never examine the frame. AI makes it visible.",
  },
  {
    slug: "ai-is-not-the-threat",
    title: "AI took the task. Your judgment remained.",
    date: "April 2025",
    excerpt:
      "A graphic designer lost a pitch last month. Not because her work was not good enough. She never got to show it. Speed was not the problem.",
  },
];
