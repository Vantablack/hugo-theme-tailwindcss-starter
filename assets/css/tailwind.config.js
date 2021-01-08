module.exports = {
  important: true,
  theme: {
    extend: {
      typography: (theme) => ({
        // DEFAULT: {
        //   css: {
        //     color: theme("colors.gray.900"),
        //     a: {
        //       color: theme("colors.blue.700"),
        //       "&:hover": {
        //         color: theme("colors.blue.700"),
        //       },
        //     },
        //   },
        // },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.gray.300"),
              "&:hover": {
                color: theme("colors.gray.300"),
              },
            },

            h1: {
              color: theme("colors.gray.300"),
            },
            h2: {
              color: theme("colors.gray.300"),
            },
            h3: {
              color: theme("colors.gray.300"),
            },
            h4: {
              color: theme("colors.gray.300"),
            },
            h5: {
              color: theme("colors.gray.300"),
            },
            h6: {
              color: theme("colors.gray.300"),
            },

            strong: {
              color: theme("colors.gray.300"),
            },

            code: {
              color: theme("colors.gray.300"),
            },

            figcaption: {
              color: theme("colors.gray.500"),
            },

            blockquote: {
              color: theme("colors.gray.300"),
            },
          },
        },
      }),
    },
  },
  darkMode: "media",
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
