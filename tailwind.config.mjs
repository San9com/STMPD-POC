/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151515",
        "ink-2": "#151414",
        night: "#0d0d0d"
      },
      fontFamily: {
        mono: ["Chivo Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
        pastiche: ["Pastiche Grotesque Trial", "Times New Roman", "serif"]
      }
    }
  },
  plugins: []
};

