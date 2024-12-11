import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(240, 6%, 90%)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(144, 73%, 37%)", // Updated primary color
          foreground: "hsl(var(--primary-foreground))",
        },
        success: {
          DEFAULT: "hsl(240, 6%, 90%)",
          foreground: "hsl(var(--success-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(213, 16%, 92%)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        danger: {
          DEFAULT: "hsl(0, 88%, 65%)", // Danger color set to #F15453
          foreground: "hsl(var(--danger-foreground))",
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
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        10: "0.625em",
        12: "0.75em",
        13: "0.8125em",
        14: "0.875em",
        15: "0.9375em",
        16: "1em",
        18: "1.125em",
        20: "1.25em",
        24: "1.5em",
        26: "1.625em",
        32: "2em",
        36: "2.25em",
        40: "2.5em",
        48: "3em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
