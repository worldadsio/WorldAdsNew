import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",

        "brand-primary": "var(--brand-primary)",
        "brand-secondary": "var(--brand-secondary)",
        "brand-tertiary": "var(--brand-tertiary)",

        "brand-effect": "var(--brand-effect)",
      },
    },
    screens:{
      xxs: "375px",
      xs: "425px",
      sm: "525px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    }
  },
  plugins: [],
} satisfies Config;
