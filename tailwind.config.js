// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{js,jsx}',
//     './components/**/*.{js,jsx}',
//     './app/**/*.{js,jsx}',
//     './src/**/*.{js,jsx}',
// 	],
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       keyframes: {
//         "accordion-down": {
//           from: { height: 0 },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: 0 },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// }
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        montserrat: {
          500: '500',
          700: '700',
        },
        fraunces: {
          700: '700',
        },
      },
    },
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
      montserrat: ['Montserrat', 'sans-serif'],
      fraunces: ['Fraunces', 'serif']
    },
    colors: {
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      secondary: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
    },
    screens: {
      sm: { min: "50px", max: "959px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "960px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      maxWidth: {
        "screen-8xl": "2000px",
      },
    },
    colors: {
      primary: {
        darkCyan: "hsl(158, 36%, 37%)",
        lightCyan:"hsla(158, 36%, 20%, 1)",
        cream: "hsl(30, 38%, 92%)",
      },
      neutral: {
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  plugins: [],
};