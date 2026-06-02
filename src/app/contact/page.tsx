import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Phil Carey",
  description: "Get in touch with Phil Carey — AI strategy, speaking, workshops, and bespoke AI tool builds.",
  alternates: { canonical: "https://philcarey.me/contact" },
};

const EMAIL = "phil@cornerstonemedia.com.au";

export default function Contact() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <div style={{ paddingTop: "8rem", paddingBottom: 0, borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div style={{ paddingBottom: "4rem" }}>
            <div className="kicker" style={{ marginBottom: "1.5rem" }}>Contact</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 0.98, letterSpacing: "-0.025em", color: "var(--ink)" }}>
              Get in touch
            </h1>
          </div>
        </div>
      </div>

      {/* ── CONTACT CONTENT ──────────────────────────────────── */}
      <div className="wrap" style={{ paddingBlock: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 6vw, 6rem)", alignItems: "start" }}>

          {/* Left — intro + contact details */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.75, color: "var(--ink)", marginBottom: "1.5rem" }}>
              Phil is interested in hearing from executives and leadership
              teams thinking through AI decisions, organisations that need
              clearer communication, and people who have a problem worth
              building a solution for.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.75, color: "var(--ink)", marginBottom: "2.5rem" }}>
              If you have read the book and want to talk through what it
              sparked, that is a welcome conversation too.
            </p>

            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "0.4rem" }}>
                Email
              </p>
              <a
                href={`mailto:${EMAIL}`}
                style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--accent)" }}
              >
                {EMAIL}
              </a>
            </div>

            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-faint)", marginBottom: "0.4rem" }}>
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/phil-carey/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--accent)" }}
              >
                linkedin.com/in/phil-carey/
              </a>
            </div>
          </div>

          {/* Right — mailto button */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "1.15rem", lineHeight: 1.55, color: "var(--ink-soft)" }}>
              Click below to open your email app with Phil&apos;s address already filled in.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Getting%20in%20touch`}
              className="btn"
              style={{ alignSelf: "flex-start" }}
            >
              Send Phil an email <span className="arw">&rarr;</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
