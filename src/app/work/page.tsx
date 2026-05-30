import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work — Phil Carey",
  description:
    "Phil Carey offers AI strategy and consulting, corporate video production through Cornerstone Media, and bespoke AI tool design and build. Based in Sydney, Australia.",
  alternates: { canonical: "https://philcarey.me/work" },
};

export default function Work() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <div className="pt-32 pb-0 border-b border-rule-line">
        <div className="max-w-wide mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-x-8 pb-16">
            <div className="md:col-span-3">
              <p className="font-sans text-sm uppercase tracking-widest text-charcoal-light mt-2">
                Work
              </p>
            </div>
            <div className="md:col-span-8">
              <h1
                className="font-serif font-black text-charcoal leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                The practice
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ── THREE AREAS ──────────────────────────────────────── */}
      <div className="max-w-wide mx-auto px-6 md:px-12 py-16 space-y-0">

        {/* AI Strategy */}
        <section
          id="ai-strategy"
          className="grid md:grid-cols-12 gap-x-8 gap-y-8 py-16 border-b border-rule-line"
        >
          <div className="md:col-span-3">
            <p className="font-sans text-xs uppercase tracking-widest text-terracotta">
              01
            </p>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif font-bold text-charcoal mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              AI Strategy and Consulting
            </h2>
            <div className="prose-phil">
              <p>
                Phil works with executives, boards, and leadership teams who
                want to think more clearly about artificial intelligence. Not
                faster. Better.
              </p>
              <p>
                The questions most organisations ask about AI are the wrong
                ones. They ask what it can do. They should be asking what it
                changes, what it exposes, and what it quietly takes away. Phil
                helps leadership teams surface those questions before the
                decisions get made, not after.
              </p>
              <p>
                His background is not in technology. It is in communication,
                craft, and the long work of turning complicated ideas into
                things people actually act on. That is what makes his AI
                thinking different from most people in the space.
              </p>
            </div>
          </div>
        </section>

        {/* Cornerstone Media */}
        <section
          id="cornerstone"
          className="grid md:grid-cols-12 gap-x-8 gap-y-8 py-16 border-b border-rule-line"
        >
          <div className="md:col-span-3">
            <p className="font-sans text-xs uppercase tracking-widest text-terracotta">
              02
            </p>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif font-bold text-charcoal mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Cornerstone Media
            </h2>
            <div className="prose-phil">
              <p>
                Cornerstone Media is the Sydney-based corporate video
                production company Phil founded in 1993. Over three decades, he
                has written, directed, and produced hundreds of videos for some
                of Australia&apos;s most recognised organisations.
              </p>
              <p>
                The work covers everything from executive communications and
                training programs to brand films and event coverage. What has
                not changed across thirty years is the approach: clarity first,
                craft always, and an insistence that a well-made video earns
                its time by doing something useful.
              </p>
              <p>
                That production background shapes Phil&apos;s consulting work
                in ways that are hard to replicate. He has spent decades
                watching where ideas lose people and what it takes to make them
                land.
              </p>
            </div>
            <a
              href="https://cornerstonemedia.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 font-sans text-sm text-terracotta uppercase tracking-widest hover:text-terracotta-dark transition-colors"
            >
              cornerstonemedia.com.au &rarr;
            </a>
          </div>
        </section>

        {/* AI Tool Design */}
        <section
          id="ai-tools"
          className="grid md:grid-cols-12 gap-x-8 gap-y-8 py-16"
        >
          <div className="md:col-span-3">
            <p className="font-sans text-xs uppercase tracking-widest text-terracotta">
              03
            </p>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif font-bold text-charcoal mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              AI Tool Design and Build
            </h2>
            <div className="prose-phil">
              <p>
                Phil builds custom AI tools for specific client problems. This
                is the part of the work that keeps the consulting honest. He
                does not just advise on AI. He builds with it.
              </p>
              <p>
                The tools he designs tend to sit at the intersection of
                communication and process: things that help organisations
                gather better information, make clearer decisions, or get
                complex thinking in front of the people who need it faster.
              </p>
              <p>
                If you have a problem that might benefit from a bespoke AI
                solution, the conversation starts the same way all his best
                work does. With a question worth asking.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <div className="border-t border-rule-line bg-cream-dark section-gap">
        <div className="max-w-wide mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-x-8">
            <div className="md:col-span-7 md:col-start-4 text-center">
              <h2 className="font-serif font-bold text-charcoal mb-6"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Start a conversation.
              </h2>
              <p className="font-sans text-base text-charcoal-mid leading-relaxed mb-8">
                If you are working through an AI decision, a communication
                challenge, or a problem that needs building rather than
                describing, Phil is interested in hearing about it.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-terracotta text-cream font-sans text-sm uppercase tracking-widest px-7 py-3.5 hover:bg-terracotta-dark transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
