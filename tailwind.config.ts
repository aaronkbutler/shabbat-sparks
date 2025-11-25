import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shabbat: {
          gold: "#FFD700",
          flame: "#FF6B35",
          warmWhite: "#FFF8E7",
          deepBlue: "#1B2845",
          softBlue: "#5E7BA3",
        },
      },
      animation: {
        flicker: "flicker 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #FFD700, 0 0 10px #FFD700" },
          "100%": { boxShadow: "0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FF6B35" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
