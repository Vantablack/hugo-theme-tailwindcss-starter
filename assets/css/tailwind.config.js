const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        'primary': colors.gray[900],
        'primary-hover': colors.blue[700],
        'secondary': colors.gray[700],
        'secondary-hover': colors.blue[700],
        // 'accent': colors.blue[700],
        'primary-dark': colors.gray[300],
        'secondary-dark': colors.gray[400],
        'secondary-hover-dark': colors.blue[500],
        // 'accent-dark': colors.blue[500],
      },
      backgroundColor: {
        'primary': colors.white,
        'primary-dark': colors.coolGray[900],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.primary"),
            figcaption: {
              color: theme("colors.secondary"),
            },
            // a: {
            //   color: theme("colors.primary"),
            //   "&:hover": {
            //     color: theme("colors.primary-hover"),
            //   },
            // },
          },
        },
        dark: {
          css: {
            color: theme("colors.primary-dark"),
            a: {
              color: theme("colors.primary-dark"),
              // "&:hover": {
              //   color: theme("colors.secondary-hover-dark"),
              // },
            },
            "a code": {
              color: theme("colors.primary-dark"),
              // "&:hover": {
              //   color: theme("colors.secondary-hover-dark"),
              // },
            },
            h1: {
              color: theme("colors.primary-dark"),
            },
            h2: {
              color: theme("colors.primary-dark"),
            },
            h3: {
              color: theme("colors.primary-dark"),
            },
            h4: {
              color: theme("colors.primary-dark"),
            },
            h5: {
              color: theme("colors.primary-dark"),
            },
            h6: {
              color: theme("colors.primary-dark"),
            },
            strong: {
              color: theme("colors.primary-dark"),
            },
            code: {
              color: theme("colors.primary-dark"),
            },
            figcaption: {
              color: theme("colors.secondary-dark"),
            },
            blockquote: {
              color: theme("colors.primary-dark"),
            },
            thead: {
              color: theme("colors.primary-dark"),
            },
            "thead th": {
              color: theme("colors.primary-dark"),
            },
            "figure figcaption": {
              color: theme("colors.secondary-dark"),
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
