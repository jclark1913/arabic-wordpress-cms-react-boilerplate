/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sitebackground: "rgba(var(--site-background))",
        primarytext: "rgba(var(--primary-text))",
        secondarytext: "rgba(var(--secondary-text))",
        normalborder: "rgba(var(--normal-border))",
      },
    },
  },
  plugins: [],
}

