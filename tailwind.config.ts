import type { Config } from "tailwindcss";

export default {
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FFFFFF",
        foreground: "#1D1D1D",
        primary: {
          DEFAULT: "#5D60EF",
          foreground: "#FFFFFF",
          light: "#7B7EF7",
          dark: "#4548E8"
        },
        secondary: {
          DEFAULT: "#A1A1B4",
          foreground: "#FFFFFF",
          light: "#BBBBC8",
          dark: "#8A8A9D"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#A1A1B4",
          foreground: "#F0F0F0",
          dark: "#8A8A9D"
        },
        accent: {
          DEFAULT: "#5D60EF",
          foreground: "#FFFFFF",
          light: "#7B7EF7",
          dark: "#4548E8"
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1D1D1D",
        },
        linok: {
          white: "#FFFFFF",
          black: "#1D1D1D",
          blue: "#5D60EF",
          gray1: "#A1A1B4",
          gray2: "#F0F0F0",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
      },
      backgroundImage: {
        'gradient-linok': 'linear-gradient(135deg, #5D60EF 0%, #7B7EF7 100%)',
        'gradient-card': 'linear-gradient(to bottom, #FFFFFF 0%, #F8F9FA 100%)',
        'gradient-button': 'linear-gradient(to right, #4548E8 0%, #5D60EF 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;