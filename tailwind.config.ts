import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "oklch(99% 0.003 250)",
        surface: "oklch(100% 0 0)",
        fg: "oklch(18% 0.012 250)",
        muted: "oklch(54% 0.012 250)",
        border: "oklch(92% 0.005 250)",
        accent: "oklch(52% 0.14 265)",
        success: "oklch(55% 0.12 145)",
        warn: "oklch(60% 0.10 75)",
        danger: "oklch(50% 0.14 25)",
      },
      fontFamily: {
        display: ["Georgia", "Charter", "Iowan Old Style", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        button: "10px",
        card: "14px",
      },
      maxWidth: {
        landing: "1120px",
        content: "1200px",
      },
      transitionDuration: {
        DEFAULT: "0.15s",
      },
    },
  },
  plugins: [],
};
export default config;
