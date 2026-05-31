import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ToolsGrid from "./tools/ToolsGrid";

export const metadata: Metadata = {
  title: "Phil Carey — AI Strategist, Author, Corporate Media Producer",
  description:
    "Phil Carey makes things. Videos, tools, books, ideas. AI strategist, author of The Curiosity Advantage, and Creative Director of Cornerstone Media. Based in Sydney, Australia.",
  alternates: { canonical: "https://philcarey.me" },
};

const ENGAGE = [
  {
    n: "01",
    title: "AI Strategy",
    body: "Clearer decisions about AI, and bespoke tools that prove the thinking. Phil works with executives, boards and leadership teams, and builds with them, not just for them.",
    href: "/work",
  },
  {
    n: "02",
    title: "Speaking & Workshops",
    body: "Sessions built around the specific decisions in the room, not general theory. For leadership teams, conferences and boards.",
    href: "/contact",
  },
  {
    n: "03",
    title: "Cornerstone Media",
    body: "Three decades writing, directing and producing corporate video for some of Australia's most recognised organisations. The craft underneath everything.",
    href: "/work#cornerstone",
  },
];

const IDEAS = [
  {
    slug: "the-question-behind-the-question",
    kind: "Essay",
    read: "5 min",
    title: "The question behind the question",
    dek: "Every question contains a frame. A belief, an assumption, an emotional lean. Most people never examine the frame. AI makes it visible.",
  },
  {
    slug: "ai-is-not-the-threat",
    kind: "Opinion",
    read: "4 min",
    title: "AI took the task. Your judgment remained.",
    dek: "A graphic designer lost a pitch last month. Not because her work was not good enough. She never got to show it. Speed was not the problem.",
  },
  {
    slug: "the-curious-leader",
    kind: "Note",
    read: "3 min",
    title: "The one question that changes the room",
    dek: "Satya Nadella walked into a Microsoft leadership meeting in 2014 and asked a single question. The answer defined the next decade of the company.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO (light) ──────────────────────────────────────── */}
      <section className="hx-hero">
        <div className="wrap">
          <div className="hx-eyebrow">
            <span className="hx-eyebrow-name">Phil Carey</span>
            <span className="hx-eyebrow-mid">Independent AI strategy &amp; craft</span>
            <span>Sydney, Australia</span>
          </div>

          <div className="hx-hero-grid">
            {/* Left */}
            <div className="hx-hero-l">
              <Reveal>
                <h1 className="hx-h1">
                  The interesting work happens when the human and the computer think together.
                </h1>
              </Reveal>
              <Reveal delay={1}>
                <p className="hx-lead">
                  Videos, AI tools, books, ideas. Phil is the author of{" "}
                  <em>The Curiosity Advantage</em>, Creative Director of Cornerstone
                  Media, and an independent AI consultant working with leaders across
                  Australia. The craft behind the thinking has been more than thirty
                  years in the making.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <div className="hx-cta">
                  <Link href="/book" className="btn">Read the book <span className="arw">&rarr;</span></Link>
                  <Link href="/contact" className="btn btn-ghost">Start a conversation <span className="arw">&rarr;</span></Link>
                </div>
              </Reveal>
            </div>

            {/* Right — portrait */}
            <Reveal delay={1} className="hx-hero-r">
              <div className="hx-portrait">
                <span className="hx-portrait-block" aria-hidden="true" />
                <div className="hx-portrait-img" style={{ position: "relative" }}>
                  <Image
                    src="/phil-carey.jpg"
                    alt="Portrait of Phil Carey"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 960px) 90vw, 440px"
                    style={{ filter: "saturate(0.92) contrast(1.04)" }}
                  />
                </div>
                <span className="hx-portrait-q" aria-hidden="true">?</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── POSITIONING BAND (dark) ──────────────────────────── */}
      <section className="hx-band ink-block">
        <div className="wrap">
          <Reveal><div className="kicker">The short version</div></Reveal>
          <Reveal delay={1}>
            <p className="hx-band-statement">
              Phil has spent thirty years turning complicated ideas into
              <span className="hx-hi"> things people actually use</span>. The AI work is
              <span className="hx-hi"> the same craft</span>, pointed at a new set of tools.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="hx-markers">
              <span>Thirty years of craft</span>
              <span className="hx-dot">&bull;</span>
              <span>Hundreds of films</span>
              <span className="hx-dot">&bull;</span>
              <span>Eight AI tools, shipped</span>
              <span className="hx-dot">&bull;</span>
              <span>One book</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TOOLS — Proof, not slides (light, deeper paper) ─── */}
      <section id="tools" className="hx-tools">
        <div className="wrap">
          <div className="hx-tools-head">
            <Reveal className="hx-tools-headl">
              <div className="kicker">Things he has actually built</div>
              <h2 className="hx-h2" style={{ marginTop: "18px" }}>Proof, not slides.</h2>
            </Reveal>
            <Reveal delay={1} className="hx-tools-headr">
              <p>A working portfolio of AI tools, built for real problems and running in the wild.</p>
            </Reveal>
          </div>
          <ToolsGrid />
        </div>
      </section>

      {/* ── PULL QUOTE (terracotta — colour moment) ──────────── */}
      <section className="hx-quote accent-block">
        <div className="wrap">
          <Reveal className="hx-quote-inner">
            <span className="hx-quote-mark" aria-hidden="true">&ldquo;</span>
            <p className="hx-quote-text">
              The question is the lever.<br />The future is the lift.
            </p>
            <div className="hx-quote-foot">
              <span className="hx-quote-cite">The Curiosity Advantage</span>
              <Link href="/book" className="btn">About the book <span className="arw">&rarr;</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW TO ENGAGE (light) ─────────────────────────────── */}
      <section className="hx-engage">
        <div className="wrap">
          <Reveal className="hx-engage-head">
            <div>
              <div className="kicker">How to engage</div>
              <h2 className="hx-h2" style={{ marginTop: "18px" }}>Three ways to work together.</h2>
            </div>
          </Reveal>
          <div className="hx-engage-grid">
            {ENGAGE.map((e, i) => (
              <Reveal key={e.n} delay={(i + 1) as 1 | 2 | 3} className="hx-offer">
                <span className="hx-offer-n">{e.n}</span>
                <h3 className="hx-offer-t">{e.title}</h3>
                <p className="hx-offer-d">{e.body}</p>
                <Link href={e.href} className="alink">
                  <span className="u">Learn more</span>
                  <span className="arw">&rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK FEATURE (dark) ──────────────────────────────── */}
      <section className="hx-book ink-block">
        <div className="wrap">
          <div className="hx-book-grid">
            <Reveal className="hx-book-cover">
              <div className="hx-book-img" style={{ position: "relative" }}>
                <Image
                  src="/book-cover.jpg"
                  alt="The Curiosity Advantage by Phil Carey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 960px) 80vw, 400px"
                />
              </div>
            </Reveal>
            <div className="hx-book-text">
              <Reveal><div className="kicker">Now available</div></Reveal>
              <Reveal delay={1}>
                <h2 className="hx-book-title">
                  The Curiosity <em>Advantage</em>
                </h2>
                <p className="hx-book-sub">
                  How better questions create better futures in the age of AI.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <p className="hx-book-body">
                  Not a book about prompts. A book about the psychology of working
                  with AI as a thinking partner, and what becomes possible when
                  curiosity drives the conversation.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="hx-book-cta">
                  <Link href="/book" className="btn">About the book <span className="arw">&rarr;</span></Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── IDEAS (light) ─────────────────────────────────────── */}
      <section className="hx-ideas">
        <div className="wrap">
          <Reveal className="hx-ideas-head">
            <div>
              <div className="kicker">Ideas &amp; writing</div>
              <h2 className="hx-h2" style={{ marginTop: "16px" }}>What Phil is thinking about.</h2>
            </div>
            <Link href="/ideas" className="alink">
              <span className="u">Read everything</span>
              <span className="arw">&rarr;</span>
            </Link>
          </Reveal>
          <div className="hx-ideas-grid">
            {IDEAS.map((a, i) => (
              <Reveal key={a.slug} delay={(i + 1) as 1 | 2 | 3}>
                <Link href={`/ideas/${a.slug}`} className="hx-idea">
                  <div className="hx-idea-meta">
                    <span>{a.kind}</span>
                    <span>{a.read}</span>
                  </div>
                  <h3 className="hx-idea-title">{a.title}</h3>
                  <p className="hx-idea-dek">{a.dek}</p>
                  <span className="hx-idea-read">Read <span className="arw">&rarr;</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
