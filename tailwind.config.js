module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {

    extend: {
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.900'),

            a: {
              color: theme('colors.red.600'),
              '&:hover': {
                color: theme('colors.red.700'),
              },
            },

          },
        },

        dark: {
          css: {
            color: theme('colors.gray.100'),

            a: {
              color: theme('colors.red.600'),
              '&:hover': {
                color: theme('colors.red.700'),
              },
            },
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            h5: {
              color: theme('colors.gray.100'),
            },
            h6: {
              color: theme('colors.gray.100'),
            },

            strong: {
              color: theme('colors.gray.100'),
            },

            code: {
              color: theme('colors.gray.100'),
            },
            th: {
              color: theme('colors.gray.100'),
            },
            figcaption: {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
    extend: {
      display: ["dark"]
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],

  // https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported/73465262#73465262
  output: {
    hashFunction: "xxhash64"
  }
}
