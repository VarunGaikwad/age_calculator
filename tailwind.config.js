/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "hsl(259, 100%, 65%)",
        "primary-light-red": "hsl(0, 100%, 67%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-off-white": "hsl(0, 0%, 94%)",
        "neutral-light-grey": "hsl(0, 0%, 86%)",
        "neutral-smokey-grey": "hsl(0, 1%, 44%)",
        "neutral-off-black": "hsl(0, 0%, 8%)",
      },
      fontSize: {
        "2x": "32px",
      },
      borderRadius: {
        "12xl": "6rem",
      },
    },
  },
  plugins: [],
};
