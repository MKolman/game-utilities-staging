module.exports = {
  publicPath: process.env.BASE_URL,

  css: {
    loaderOptions: {
      sass: {
        data: `
$theme-color: ${process.VUE_APP_THEME};
$bg-color: ${process.VUE_APP_BGCOLOR};`
      }
    }
  },

  pwa: {
    themeColor: process.env.VUE_APP_THEME,
    name: process.env.VUE_APP_TITLE,
    msTileColor: process.env.VUE_APP_BGCOLOR,
    manifestOptions: {
      background_color: process.env.VUE_APP_BGCOLOR,
      icons: [
        {
          src: "./img/icons/android-chrome-128x128.png",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: "./img/icons/android-chrome-152x152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "./img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./img/icons/android-chrome-256x256.png",
          sizes: "256x256",
          type: "image/png"
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "./img/icons/android-chrome-1280x1280.png",
          sizes: "1280x1280",
          type: "image/png"
        }
      ],
      start_url: "./index.html?utm_src=pwa",
      orientation: "natural"
    }
  }
};
