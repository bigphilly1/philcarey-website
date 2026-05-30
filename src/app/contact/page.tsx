"use client";

import type { Metadata } from "next";
import { useState } from "react";

// Note: Metadata export cannot coexist with "use client".
// Move metadata to a server wrapper if needed — for now defined here as reference.
// export const metadata: Metadata = { ... }

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <div className="pt-32 pb-0 border-b border-rule-line">
        <div className="max-w-wide mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-x-8 pb-16">
            <div className="md:col-span-3">
              <p className="font-sans text-sm uppercase tracking-widest text-charcoal-light mt-2">
                Contact
              </p>
            </div>
            <div className="md:col-span-8">
              <h1
                className="font-serif font-black text-charcoal leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                Get in touch
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT CONTENT ──────────────────────────────────── */}
      <div className="max-w-wide mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-12">

          {/* Intro */}
          <div className="md:col-span-4">
            <div className="prose-phil">
              <p>
                Phil is interested in hearing from executives and leadership
                teams thinking through AI decisions, organisations that need
                clearer communication, and people who have a problem worth
                building a solution for.
              </p>
              <p>
                If you have read the book and want to talk through what it
                sparked, that is a welcome conversation too.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light mb-1">
                  Email
                </p>
                <a
                  href="mailto:phil@philcarey.com"
                  className="font-sans text-sm text-terracotta hover:text-terracotta-dark transition-colors"
                >
                  phil@philcarey.com
                </a>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-charcoal-light mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/philcarey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-terracotta hover:text-terracotta-dark transition-colors"
                >
                  linkedin.com/in/philcarey
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-6 md:col-start-6">
            {status === "sent" ? (
              <div className="border border-rule-line p-8">
                <p className="font-serif text-xl text-charcoal mb-2">
                  Message received.
                </p>
                <p className="font-sans text-base text-charcoal-mid">
                  Phil will be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs uppercase tracking-widest text-charcoal-light mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-rule-line px-4 py-3 font-sans text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs uppercase tracking-widest text-charcoal-light mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-rule-line px-4 py-3 font-sans text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs uppercase tracking-widest text-charcoal-light mb-2"
                  >
                    What are you working on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-rule-line px-4 py-3 font-sans text-base text-charcoal focus:outline-none focus:border-charcoal transition-colors resize-none"
                    placeholder="Tell Phil what you are working on and what kind of conversation you are looking for."
                  />
                </div>

                {status === "error" && (
                  <p className="font-sans text-sm text-terracotta">
                    Something went wrong. Try emailing phil@philcarey.com
                    directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full md:w-auto bg-terracotta text-cream font-sans text-sm uppercase tracking-widest px-8 py-3.5 hover:bg-terracotta-dark transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
