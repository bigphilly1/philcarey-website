import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Phil Carey — AI Strategist, Author, Corporate Media Producer",
    template: "%s | Phil Carey",
  },
  description:
    "Phil Carey is an Australian AI strategist, author of The Curiosity Advantage, Creative Director of Cornerstone Media, and corporate media producer. Based in Sydney.",
  metadataBase: new URL("https://philcarey.me"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://philcarey.me",
    siteName: "Phil Carey",
    title: "Phil Carey — AI Strategist, Author, Corporate Media Producer",
    description:
      "Phil Carey is an Australian AI strategist, author of The Curiosity Advantage, Creative Director of Cornerstone Media, and corporate media producer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phil Carey — AI Strategist, Author, Corporate Media Producer",
    description:
      "Phil Carey is an Australian AI strategist, author of The Curiosity Advantage, Creative Director of Cornerstone Media, and corporate media producer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://philcarey.me",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-charcoal">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
