import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        "cream-dark": "#F0EBE3",
        terracotta: "#B85C38",
        "terracotta-dark": "#8F4020",
        charcoal: "#1C1C1A",
        "charcoal-mid": "#3A3A38",
        "charcoal-light": "#6B6B68",
        "rule-line": "#D9D2C7",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
        slab: ["'Zilla Slab'", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.1" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.2" }],
      },
      maxWidth: {
        prose: "68ch",
        wide: "90rem",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
      },
    },
  },
  plugins: [],
};

export default config;
