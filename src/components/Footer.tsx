import Link from "next/link";

// Structured data is static hardcoded JSON-LD — no user input, no XSS risk.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Phil Carey",
  url: "https://philcarey.com",
  sameAs: ["https://www.linkedin.com/in/philcarey"],
  jobTitle: [
    "AI Consultant and Strategist",
    "Author",
    "Creative Director",
    "Chief Operating Officer",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Cornerstone Media",
      url: "https://cornerstonemedia.com.au",
    },
    {
      "@type": "Organization",
      name: "Sophie Scott Health",
    },
  ],
  nationality: { "@type": "Country", name: "Australia" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressCountry: "AU",
  },
  description:
    "Phil Carey is an Australian AI strategist, author of The Curiosity Advantage, Creative Director of Cornerstone Media, and corporate media producer based in Sydney.",
  knowsAbout: [
    "Artificial Intelligence Strategy",
    "Corporate Communications",
    "AI Tool Design",
    "Leadership Development",
    "Media Production",
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule-line bg-cream">
      <div className="max-w-wide mx-auto px-6 md:px-12 py-12 md:py-16">
        <p className="font-sans text-sm text-charcoal-light mb-8 max-w-xl leading-relaxed">
          Phil Carey is an Australian AI strategist, author, corporate media
          producer, and creator of <em>The Curiosity Advantage</em>.
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { href: "/about", label: "About" },
              { href: "/book", label: "The Book" },
              { href: "/work", label: "Work" },
              { href: "/ideas", label: "Ideas" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-sm text-charcoal-light hover:text-charcoal transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/philcarey"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-charcoal-light hover:text-terracotta transition-colors"
            >
              LinkedIn
            </a>
            <span className="font-sans text-sm text-charcoal-light">
              &copy; {year} Phil Carey
            </span>
          </div>
        </div>
      </div>

      {/* Static JSON-LD for schema.org Person — hardcoded, not user-supplied */}
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        // Static hardcoded object — safe from XSS
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </footer>
  );
}
