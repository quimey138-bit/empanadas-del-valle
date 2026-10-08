/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        crema: "#fff7e8",
        maiz: "#f7c948",
        rojo: "#d93832",
        terracota: "#b84d2f",
        valle: "#0f9fa8",
        tinta: "#2d1b16"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(92, 42, 24, 0.16)",
        glow: "0 18px 50px rgba(247, 201, 72, 0.32)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
