/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F1EFED",
        foreground: "var(--foreground)",
      },
      fontFamily :{
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
