import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps } from "../data";

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: `${app.title} — Phil Carey`,
    description: app.tagline,
    alternates: { canonical: `https://philcarey.me/tools/${app.slug}` },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  return (
    <>
      <div className="pt-32 pb-0 border-b border-rule-line">
        <div className="max-w-wide mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-x-8 pb-16">
            <div className="md:col-span-3">
              <Link
                href="/#tools"
                className="font-sans text-sm uppercase tracking-widest text-charcoal-light hover:text-terracotta transition-colors"
              >
                ← Tools
              </Link>
            </div>
            <div className="md:col-span-8">
              <p className="font-sans text-xs uppercase tracking-widest text-terracotta mb-4">
                {app.category}
              </p>
              <h1
                className="font-serif font-black text-charcoal leading-none mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {app.title}
              </h1>
              <p className="font-slab italic text-xl text-charcoal-mid leading-relaxed">
                {app.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-wide mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-12 gap-x-8">
          <div className="md:col-span-7 md:col-start-4 prose-phil space-y-6">
            {app.description.map((para, i) => (
              <p key={i} className="font-sans text-base text-charcoal-mid leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-rule-line bg-cream-dark section-gap">
        <div className="max-w-wide mx-auto px-6 md:px-12 text-center">
          <h2
            className="font-serif font-bold text-charcoal mb-6"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Interested in this tool?
          </h2>
          <p className="font-sans text-base text-charcoal-mid leading-relaxed max-w-xl mx-auto mb-8">
            Phil builds bespoke AI tools for specific problems. If this one is relevant to your work, or you have a problem that needs building, get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-terracotta text-cream font-sans text-sm uppercase tracking-widest px-7 py-3.5 hover:bg-terracotta-dark transition-colors"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </>
  );
}
