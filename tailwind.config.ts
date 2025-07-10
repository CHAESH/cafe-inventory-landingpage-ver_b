import type { Config } from "tailwindcss"

const config: Config = {
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
        // 브랜드 컬러 정의
        mint: {
          DEFAULT: "#4CD1BC",
          50: "#E8F9F7",
          100: "#D1F3EF",
          200: "#A3E7DF",
          300: "#75DBCF",
          400: "#4CD1BC",
          500: "#3BB8A6",
          600: "#2E9B8A",
          700: "#227A6D",
          800: "#165951",
          900: "#0A3834",
        },
        beige: {
          DEFAULT: "#F5EBDD",
          50: "#FEFCFA",
          100: "#F5EBDD",
          200: "#EBD7BB",
          300: "#E1C399",
          400: "#D7AF77",
          500: "#CD9B55",
          600: "#B8834A",
          700: "#A36B3F",
          800: "#8E5334",
          900: "#793B29",
        },
        charcoal: {
          DEFAULT: "#3A3A3A",
          50: "#F5F5F5",
          100: "#EBEBEB",
          200: "#D6D6D6",
          300: "#C2C2C2",
          400: "#ADADAD",
          500: "#999999",
          600: "#7A7A7A",
          700: "#5C5C5C",
          800: "#3A3A3A",
          900: "#1F1F1F",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
