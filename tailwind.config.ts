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
        // Primary
        "rh-dark-gray": "hsl(0, 0%, 63%)",
        "rh-black": "hsl(0, 0%, 0%)",
        "rh-white": "hsl(0, 0%, 100%)",
        "rh-very-dark-gray": "hsl(0, 0%, 27%)",
      },
      fontSize: {
        base: "12px",
      },
      fontFamily: {
        league_spartan: ["League Spartan", "san-serif"],
      },
      fontWeight: {
        normal: "500",
        semibold: "600",
        bold: "700",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundImage: {
        // "sample-bg": "/tsugini" // basepath of github pages
      },
    },
  },
  plugins: [],
};
export default config;
