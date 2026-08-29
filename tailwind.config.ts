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
        obsidian: {
          DEFAULT: "#0E0E0F",
          light: "#1A1A1D",
          muted: "#2A2A2E",
        },
        silk: {
          DEFAULT: "#FAF8F5",
          dark: "#F3EFEA",
          muted: "#EBE5DC",
        },
        champagne: {
          DEFAULT: "#D4AF37",
          dark: "#B89428",
          light: "#EAD688",
          glow: "rgba(212, 175, 55, 0.15)",
        },
        taupe: {
          DEFAULT: "#766E65",
          light: "#A39B92",
          dark: "#4A443E",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        boutique: "0 20px 40px -15px rgba(0, 0, 0, 0.08)",
        "boutique-hover": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        gold: "0 10px 30px -10px rgba(212, 175, 55, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
