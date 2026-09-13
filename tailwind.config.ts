import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#040708",
          900: "#070C0E",
          850: "#0C1418",
          800: "#121E24",
          700: "#1A2C35",
          600: "#243D49",
        },
        emerald: {
          glow: "#00E599",
          tech: "#00D084",
          deep: "#059669",
          dark: "#064E3B",
        },
        cyber: {
          cyan: "#06B6D4",
          teal: "#14B8A6",
          lime: "#84CC16",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "drop-shadow(0 0 8px rgba(0, 208, 132, 0.3))" },
          "100%": { opacity: "0.9", filter: "drop-shadow(0 0 20px rgba(0, 208, 132, 0.7))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
