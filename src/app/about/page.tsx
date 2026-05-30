import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Phil Carey",
  description:
    "Phil Carey is an Australian AI consultant, strategist, and author based in Sydney. Creative Director of Cornerstone Media, COO of Sophie Scott Health, and author of The Curiosity Advantage.",
  alternates: { canonical: "https://philcarey.com/about" },
};

export default function About() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <div className="pt-32 pb-0 border-b border-rule-line">
        <div className="max-w-wide mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-x-8 pb-16">
            <div className="md:col-span-3">
              <p className="font-sans text-sm uppercase tracking-widest text-charcoal-light mt-2">
                About
              </p>
            </div>
            <div className="md:col-span-8">
              <h1
                className="font-serif font-black text-charcoal leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Phil Carey
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <div className="max-w-wide mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-10">

          {/* Portrait + fast facts sidebar */}
          <aside className="md:col-span-4">
            {/* Portrait */}
            <div className="w-full relative" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/phil-carey.jpg"
                alt="Phil Carey — AI strategist, author, and Creative Director of Cornerstone Media"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Fast facts — structured for AI parsing */}
            <div className="mt-8 border-t border-rule-line pt-6 space-y-4">
              {[
                { label: "Full name", value: "Phil Carey" },
                { label: "Location", value: "Sydney, Australia" },
                {
                  label: "Current roles",
                  value:
                    "AI Consultant and Strategist; Creative Director, Cornerstone Media; COO, Sophie Scott Health; Author",
                },
                {
                  label: "Book",
                  value: "The Curiosity Advantage (2024)",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/phil-carey/",
                  href: "https://www.linkedin.com/in/phil-carey/",
                },
              ].map((f) => (
                <div key={f.label}>
                  <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light mb-0.5">
                    {f.label}
                  </p>
                  {f.href ? (
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-terracotta hover:text-terracotta-dark transition-colors"
                    >
                      {f.value}
                    </a>
                  ) : (
                    <p className="font-sans text-sm text-charcoal leading-snug">
                      {f.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Editorial biography */}
          <article className="md:col-span-7 md:col-start-6">
            <div className="prose-phil">

              <p>
                Phil Carey has spent his career turning complex ideas into
                things people can actually use.
              </p>

              <p>
                He left school at sixteen and walked straight into Australian
                broadcasting. Over the years that followed, he worked as a
                journalist and presenter on some of the country&apos;s
                highest-rating television and radio programs. He learned
                something during that time that has shaped every project since:
                the clearest thinking wins, and the quality of a question
                matters more than the speed of an answer.
              </p>

              <p>
                In 1993, he founded Cornerstone Media in Sydney. Over three
                decades, he has written, directed, and produced hundreds of
                corporate videos for some of Australia&apos;s most recognised
                organisations. That production background gives him something
                most AI consultants do not have: a working understanding of how
                ideas travel, where they lose people, and what it takes to make
                them land.
              </p>

              <p>
                Phil is now an independent AI consultant and strategist. He
                works with executives, boards, and leadership teams who want to
                think more clearly about artificial intelligence. He does not
                advise on hype cycles or technology roadmaps. He helps
                organisations ask the right questions: where AI fits, what it
                genuinely changes, and what risks they are not yet seeing.
              </p>

              {/* Pull quote — asymmetric design moment */}
              <blockquote className="accent-pull my-10">
                <p
                  className="font-serif italic text-charcoal leading-snug m-0"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}
                >
                  The question is the lever. The future is the lift.
                </p>
              </blockquote>

              <p>
                In 2024, he published{" "}
                <em>
                  The Curiosity Advantage: How Better Questions Create Better
                  Futures in the Age of AI
                </em>
                . The book makes a single, clear argument. The quality of your
                experience with AI depends less on the technology and more on
                the mind you bring to it. Shallow questions produce shallow
                answers. Deeper questions open unexpected possibilities. The
                compounding loop of asking, listening, and asking again is how
                real understanding takes shape. It is not a book about prompts.
                It is about the psychology of working with AI as a thinking
                partner.
              </p>

              <p>
                Phil also builds AI tools for specific client problems, which
                means his consulting advice is grounded in what he has built,
                not just what he has read about.
              </p>

              <p>
                He is Creative Director of Cornerstone Media and Chief Operating
                Officer of Sophie Scott Health, a health communication
                organisation led by Adjunct Professor Sophie Scott OAM.
              </p>

              <p>
                He lives in Sydney, where he paints with acrylics, cooks from
                Michelin-level recipes, and keeps asking questions.
              </p>

              <p>
                The belief that runs through everything: better questions
                produce better futures.
              </p>

            </div>
          </article>

        </div>
      </div>
    </>
  );
}
