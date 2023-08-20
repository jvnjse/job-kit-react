// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_white: "#ffffff",
        secondary_white: "#e7e5e5",
        background_color: "#f5f5f5",
        background_grey_color: "#c2c7c7",
        background_body_color: "#ffffff",
        primary_blue: "#271249",
        text_white_primary_color: "#f9f4f4",
        text_black_primary_color: "#141414",
        text_black_secondary_color: "#4e4e4e",
        button_primary_color: "#2a1249",
        button_secondary_white_color: "#ffffff",
        button_secondary_black_color: "#141414",
      },
    },
  },
  plugins: [],
};
