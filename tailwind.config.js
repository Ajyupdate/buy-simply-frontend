/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Noto Sans", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
          serif: ["Lora", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
          heading: ["Lora", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        },
      },
    },
    plugins: [],
};
