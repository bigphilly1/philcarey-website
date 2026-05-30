"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/book", label: "The Book" },
  { href: "/work", label: "Work" },
  { href: "/ideas", label: "Ideas" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-rule-line">
      <div className="max-w-wide mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-charcoal hover:text-terracotta transition-colors"
        >
          Phil Carey
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-charcoal p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <>
                <line x1="1" y1="1" x2="21" y2="15" />
                <line x1="21" y1="1" x2="1" y2="15" />
              </>
            ) : (
              <>
                <line x1="0" y1="2" x2="22" y2="2" />
                <line x1="0" y1="8" x2="22" y2="8" />
                <line x1="0" y1="14" x2="22" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-cream border-t border-rule-line px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-base normal-case tracking-normal py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
