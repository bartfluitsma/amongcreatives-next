const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: "var(--primaryColor)",
        secondary: "var(--secondaryColor)",
        darkColor: "var(--darkColor)",
        lightColor: "var(--lightColor)",
        // header: "var(--header)",
        accent: "var(--accentColor)",
      },
      fontFamily: {
        "Cormorant": ["Cormorant", ...defaultTheme.fontFamily.sans],
        "Forum": ["Forum", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'gridImageTemplateColumn': '1fr minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}
