import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Phil Carey",
  description:
    "Get in touch with Phil Carey. AI strategy, corporate media production, and bespoke AI tool design. Based in Sydney, Australia.",
  alternates: { canonical: "https://philcarey.com/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
