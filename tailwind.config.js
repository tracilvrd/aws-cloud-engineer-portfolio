/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark purple theme
        "dark-bg": "#160826",
        "dark-accent": "#2a0d46",
        "purple-light": "#f5ebff",
        "purple-pale": "#f0abfc",
        "purple-bright": "#e879f9",
        "magenta": "#d946ef",
        "magenta-pale": "#a855f7",
        "accent-green": "#4ade80",
        "accent-red": "#f87171",
      },
      fontFamily: {
        "sans": ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
      fontSize: {
        "eyebrow": ["0.8rem", { lineHeight: "1.5", letterSpacing: "0.12em" }],
      },
      textShadow: {
        glow: "0 0 8px rgba(217, 70, 239, 0.45)",
        "glow-strong": "0 0 8px rgba(232, 121, 249, 0.55)",
      },
      boxShadow: {
        glow: "0 0 12px rgba(217, 70, 239, 0.35)",
        panel: "0 0 18px rgba(217, 70, 239, 0.18), inset 0 0 12px rgba(192, 132, 252, 0.12)",
        tag: "0 0 10px rgba(217, 70, 239, 0.25)",
        "btn-glow": "0 0 16px rgba(217, 70, 239, 0.55)",
        "icon-glow": "drop-shadow(0 0 6px rgba(217, 70, 239, 0.45))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top, #2a0d46 0%, #160826 55%, #090312 100%)",
        "gradient-btn": "linear-gradient(90deg, #a855f7 0%, #d946ef 100%)",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
