// tailwind.config.js
module.exports = {
  content: ["*"],

  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',  // custom color
      },
      spacing: {
        '128': '32rem',      // custom spacing
      },
    },
  },

  plugins: [],

  corePlugins:{
    filter:false
  },
}
