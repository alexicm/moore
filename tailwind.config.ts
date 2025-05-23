import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#43492e", // Dark green
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#727a4e", // Medium green
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ccd3a7", // Light green/sage
          foreground: "#43492e",
        },
        muted: {
          DEFAULT: "#f5f3ee", // Off-white
          foreground: "#43492e",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        first: {
          "0%": { transform: "translateY(-10%) translateX(10%) scale(1)" },
          "33%": { transform: "translateY(10%) translateX(-10%) scale(1.2)" },
          "66%": { transform: "translateY(-10%) translateX(-10%) scale(0.8)" },
          "100%": { transform: "translateY(-10%) translateX(10%) scale(1)" },
        },
        second: {
          "0%": { transform: "translateY(10%) translateX(10%) scale(1.2)" },
          "33%": { transform: "translateY(-10%) translateX(-10%) scale(0.8)" },
          "66%": { transform: "translateY(10%) translateX(-10%) scale(1)" },
          "100%": { transform: "translateY(10%) translateX(10%) scale(1.2)" },
        },
        third: {
          "0%": { transform: "translateY(-10%) translateX(-10%) scale(1.2)" },
          "33%": { transform: "translateY(10%) translateX(10%) scale(0.8)" },
          "66%": { transform: "translateY(10%) translateX(10%) scale(1)" },
          "100%": { transform: "translateY(-10%) translateX(-10%) scale(1.2)" },
        },
        fourth: {
          "0%": { transform: "translateY(10%) translateX(-10%) scale(1)" },
          "33%": { transform: "translateY(-10%) translateX(10%) scale(1.2)" },
          "66%": { transform: "translateY(10%) translateX(10%) scale(0.8)" },
          "100%": { transform: "translateY(10%) translateX(-10%) scale(1)" },
        },
        fifth: {
          "0%": { transform: "translateY(-10%) translateX(10%) scale(1)" },
          "33%": { transform: "translateY(10%) translateX(-10%) scale(0.8)" },
          "66%": { transform: "translateY(10%) translateX(10%) scale(1.2)" },
          "100%": { transform: "translateY(-10%) translateX(10%) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 1.5s ease-in-out forwards",
        first: "first 12s infinite linear",
        second: "second 12s infinite linear",
        third: "third 12s infinite linear",
        fourth: "fourth 12s infinite linear",
        fifth: "fifth 12s infinite linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
