import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F4F0E8",
        ink: "#30382F",
        copper: "#9B7049",
        sage: "#D9DED3",
      },
      fontFamily: {
        serif: ['"Source Serif 4 Variable"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "40rem", page: "72rem" },
    },
  },
  plugins: [],
};

export default config;
