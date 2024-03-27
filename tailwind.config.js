
// // /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary_white: "#ffffff",
//         secondary_white: "#e7e5e5",
//         background_color: "#f5f5f5",
//         background_grey_color: "#c2c7c7",
//         background_body_color: "#ffffff",
//         primary_blue: "#271249",
//         text_white_primary_color: "#f9f4f4",
//         text_black_primary_color: "#141414",
//         text_black_secondary_color: "#4e4e4e",
//         button_primary_color: "#2a1249",
//         button_secondary_white_color: "#ffffff",
//         button_secondary_black_color: "#141414",
//          // extra --------------
           
//           // extra --------------
//       },
     
//     },
//   },
//   plugins: [],
// };

const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        //---------------------------previous--
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
        //----------------prev end-----
        textDecoration: ['hover'], // Add 'hover' variant for textDecoration
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

