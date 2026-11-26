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
        gold: "#C9A84C",
        "gold-light": "#E8D48B",
        charcoal: "#1A1A1A",
        cream: "#FAF7F2",
        dark: "#0F0F0F",
        gray: "#6B6B6B",
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(201,168,76,0.3)",
        "gold-glow-lg": "0 0 40px rgba(201,168,76,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;

