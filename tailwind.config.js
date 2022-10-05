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
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': 'clamp(1em, 4.8vw, 1.2em)',
        'lg': 'clamp(1.2em, 4.8vw, 1.3em)',
        'xl': '1.25rem', // h5
        '2xl': '1.5rem', // h5
        '3xl': 'clamp(1.35em, 3.5vw, 1.6em)', // h4
        '4xl': 'clamp(1.9em, 4vw, 2.5em)', // h3
        '5xl': 'clamp(2.2em, 4.5vw, 3em)', // h2
        '6xl': 'clamp(2.7em, 5vw, 3.3em)', // h1
        '7xl': 'clamp(1.7em, 5vw, 3em)', // h1
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
      },
      boxShadow: {
        'softShadow': '0 4px 4px rgba(0,0,0,.1)',
      },
    },
  },
  plugins: [],
}
