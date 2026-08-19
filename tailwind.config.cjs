/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: "640px",
    },
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              color: false,
            },
            code: {
              color: false,
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
