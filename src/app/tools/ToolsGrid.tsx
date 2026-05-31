"use client";

import Link from "next/link";
import { useState } from "react";
import { apps } from "./data";

const ALL = "All";
const categories = [ALL, ...Array.from(new Set(apps.map((a) => a.category)))];

export default function ToolsGrid() {
  const [active, setActive] = useState(ALL);
  const visible = active === ALL ? apps : apps.filter((a) => a.category === active);

  return (
    <>
      {/* Card grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((app) => (
          <Link
            key={app.slug}
            href={`/tools/${app.slug}`}
            className="group relative border border-rule-line p-6 flex flex-col gap-4 hover:border-terracotta hover:-translate-y-1 transition-all duration-200"
          >
            {/* Category tag */}
            <span className="font-sans text-xs uppercase tracking-widest text-terracotta">
              {app.category}
            </span>

            {/* Icon */}
            <div className="text-charcoal-light group-hover:text-terracotta transition-colors">
              <AppIcon slug={app.slug} />
            </div>

            {/* Text */}
            <div>
              <h3 className="font-serif font-bold text-base text-charcoal leading-snug mb-2 group-hover:text-terracotta transition-colors">
                {app.title}
              </h3>
              <p className="font-sans text-sm text-charcoal-mid leading-relaxed">
                {app.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mt-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-sans text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${
              active === cat
                ? "border-terracotta bg-terracotta text-cream"
                : "border-rule-line text-charcoal-mid hover:border-terracotta hover:text-terracotta"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}

function AppIcon({ slug }: { slug: string }) {
  const props = {
    width: 36,
    height: 36,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (slug) {
    case "client-intelligence-system":
      return (
        <svg {...props}>
          <rect x="4" y="11" width="32" height="22" rx="1" />
          <polyline points="4,11 20,23 36,11" />
          <line x1="20" y1="4" x2="20" y2="8" />
          <line x1="25" y1="5.5" x2="22.5" y2="8" />
          <line x1="15" y1="5.5" x2="17.5" y2="8" />
        </svg>
      );
    case "throughline":
      return (
        <svg {...props}>
          <path d="M6 15 L14 15 L28 6 L28 34 L14 25 L6 25 Z" />
          <line x1="14" y1="15" x2="14" y2="25" />
          <path d="M6 25 L6 32" />
          <path d="M32 13 Q37 20 32 27" />
          <path d="M34 9 Q42 20 34 31" />
        </svg>
      );
    case "the-key-and-the-plate":
      return (
        <svg {...props}>
          <circle cx="13" cy="20" r="9" />
          <circle cx="13" cy="20" r="4" />
          <line x1="22" y1="20" x2="38" y2="20" />
          <line x1="34" y1="20" x2="34" y2="26" />
          <line x1="29" y1="20" x2="29" y2="25" />
        </svg>
      );
    case "simple-signals":
      return (
        <svg {...props}>
          <polyline points="2,20 7,20 10,10 13,30 16,15 19,25 22,12 25,28 28,18 31,20 38,20" />
        </svg>
      );
    case "personal-command-centre":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="32" height="32" rx="1" />
          <line x1="4" y1="14" x2="36" y2="14" />
          <line x1="20" y1="14" x2="20" y2="36" />
          <line x1="8" y1="20" x2="16" y2="20" />
          <line x1="8" y1="25" x2="14" y2="25" />
          <line x1="24" y1="20" x2="32" y2="20" />
          <line x1="24" y1="25" x2="30" y2="25" />
        </svg>
      );
    case "careobs":
      return (
        <svg {...props}>
          <rect x="10" y="3" width="20" height="28" rx="1" />
          <line x1="15" y1="11" x2="25" y2="11" />
          <line x1="15" y1="17" x2="25" y2="17" />
          <line x1="15" y1="23" x2="21" y2="23" />
          <path d="M10 31 Q10 37 20 37 Q30 37 30 31" />
        </svg>
      );
    case "feel-happy":
      return (
        <svg {...props}>
          <circle cx="20" cy="20" r="8" />
          <line x1="20" y1="4" x2="20" y2="8" />
          <line x1="20" y1="32" x2="20" y2="36" />
          <line x1="4" y1="20" x2="8" y2="20" />
          <line x1="32" y1="20" x2="36" y2="20" />
          <line x1="8.7" y1="8.7" x2="11.5" y2="11.5" />
          <line x1="28.5" y1="28.5" x2="31.3" y2="31.3" />
          <line x1="31.3" y1="8.7" x2="28.5" y2="11.5" />
          <line x1="11.5" y1="28.5" x2="8.7" y2="31.3" />
          <path d="M15 23 Q20 27 25 23" />
        </svg>
      );
    case "sector-rotation-signal-tracker":
      return (
        <svg {...props}>
          <path d="M20 6 A14 14 0 1 0 34 20" strokeDasharray="none" />
          <polyline points="30,6 34,20 22,18" />
          <polyline points="10,26 15,20 19,23 24,15 30,16" />
        </svg>
      );
    default:
      return null;
  }
}
