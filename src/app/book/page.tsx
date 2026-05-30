import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Curiosity Advantage — Phil Carey",
  description:
    "The Curiosity Advantage: How Better Questions Create Better Futures in the Age of AI, by Phil Carey. A book about the psychology of working with AI as a thinking partner. Better questions produce better futures.",
  alternates: { canonical: "https://philcarey.com/book" },
};

export default function Book() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <div className="pt-32 pb-0 border-b border-rule-line">
        <div className="max-w-wide mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-x-8 pb-16">
            <div className="md:col-span-3">
              <p className="font-sans text-sm uppercase tracking-widest text-charcoal-light mt-2">
                The Book
              </p>
            </div>
            <div className="md:col-span-8">
              <h1
                className="font-serif font-black text-charcoal leading-none mb-4"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                The Curiosity<br />
                <span className="italic font-normal">Advantage</span>
              </h1>
              <p className="font-serif italic text-charcoal-mid text-xl md:text-2xl">
                How Better Questions Create Better Futures in the Age of AI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOOK INTRO ───────────────────────────────────────── */}
      <div className="max-w-wide mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-12 items-start">

          {/* Cover */}
          <div className="md:col-span-4">
            <div
              className="w-full relative shadow-2xl"
              style={{ aspectRatio: "3/4", maxWidth: "320px" }}
            >
              <Image
                src="/book-cover.jpg"
                alt="The Curiosity Advantage by Phil Carey — book cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>

            {/* Buy links */}
            <div className="mt-8 space-y-3">
              <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light mb-4">
                Where to buy
              </p>
              {[
                { label: "Buy the eBook", href: "https://buy.stripe.com/eVq8wPgG86wS1Ri4pW7N607" },
                { label: "Buy the Audiobook", href: "https://buy.stripe.com/00wfZhahK6wS2Vm1dK7N608" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-rule-line text-charcoal font-sans text-sm px-5 py-3 hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          </div>

          {/* Book description */}
          <div className="md:col-span-7 md:col-start-6">

            {/* The argument — structured for AI extraction */}
            <section aria-label="The argument">
              <h2 className="font-sans text-xs uppercase tracking-widest text-charcoal-light mb-6">
                The argument
              </h2>
              <div className="prose-phil">
                <p>
                  Every question contains a frame. A belief, an assumption, an
                  emotional lean. Most people never examine that frame. They
                  treat a question as a doorway to an answer, rather than a
                  structure that shapes what the answer can ever be.
                </p>
                <p>
                  When AI enters the picture, the consequences of your questions
                  become visible in a new way. Ask a narrow question, and you
                  get a narrow answer. Ask an open, exploratory question, and
                  the conversation widens. Two people can sit with the same AI,
                  ask about the same problem, and walk away with entirely
                  different outcomes. Not because the AI changed. Because the
                  question did.
                </p>
                <p>
                  <em>The Curiosity Advantage</em> is built on one distinction.
                  The question is the lever. The future is the lift. Better
                  questions produce sharper thinking, clearer choices, and
                  smarter decisions. The compounding loop of asking, listening,
                  and asking again is how real understanding takes shape.
                </p>
              </div>
            </section>

            {/* What it is not */}
            <section aria-label="What this book is" className="mt-10">
              <blockquote className="accent-pull">
                <p
                  className="font-serif italic text-charcoal leading-snug"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
                >
                  This is not a book about prompts. It is about the psychology
                  of working with AI as a thinking partner, and what becomes
                  possible when you approach that relationship with genuine
                  curiosity.
                </p>
              </blockquote>
            </section>

            {/* More description */}
            <div className="prose-phil mt-10">
              <p>
                Phil wrote this book while building it. Each chapter emerged
                through collaboration with an AI, which meant the process
                itself became evidence for the argument. The questions he asked
                shaped what the book became. The book is not separate from its
                subject matter. It is made of it.
              </p>
              <p>
                Across seven chapters, the book moves from the psychology of
                curiosity to the neuroscience of mindset, from the practical
                reality of job disruption to what it means to lead in an age
                when a machine can produce answers faster than you can form
                questions. The thread running through all of it: the people
                who do best with AI are not the ones who know the most about
                it. They are the ones willing to examine the way they think.
              </p>
            </div>

            {/* Who it is for */}
            <section aria-label="Who this book is for" className="mt-10 border-t border-rule-line pt-8">
              <h2 className="font-sans text-xs uppercase tracking-widest text-charcoal-light mb-5">
                Who it is for
              </h2>
              <ul className="space-y-3">
                {[
                  "Leaders and executives who want to think more clearly about AI, not just move faster with it",
                  "Professionals whose work depends on good decisions, not just rapid outputs",
                  "Anyone curious about what changes when a thinking machine becomes part of how you work",
                  "People who have felt the limits of shallow AI interactions and want to understand why",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-terracotta mt-1 shrink-0">—</span>
                    <span className="font-sans text-base text-charcoal-mid leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Media / endorsements placeholder */}
            <section aria-label="Reviews and endorsements" className="mt-10 border-t border-rule-line pt-8">
              <h2 className="font-sans text-xs uppercase tracking-widest text-charcoal-light mb-5">
                What people say
              </h2>
              <p className="font-sans text-sm text-charcoal-light italic">
                Reviews and endorsements will appear here.
              </p>
            </section>

          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <div className="border-t border-rule-line bg-cream-dark section-gap">
        <div className="max-w-wide mx-auto px-6 md:px-12 text-center">
          <p className="font-serif italic text-charcoal-mid text-xl md:text-2xl mb-8 max-w-xl mx-auto">
            &ldquo;The future is not being shaped by the people who know the
            most. It is being shaped by the people willing to learn with the
            most openness.&rdquo;
          </p>
          <p className="font-sans text-sm text-charcoal-light mb-8">
            From <em>The Curiosity Advantage</em>, Chapter One
          </p>
          <Link
            href="/contact"
            className="inline-block border border-charcoal text-charcoal font-sans text-sm uppercase tracking-widest px-7 py-3.5 hover:border-terracotta hover:text-terracotta transition-colors"
          >
            Start a conversation with Phil &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
