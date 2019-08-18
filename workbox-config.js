module.exports = {
  "globDirectory": "_site/",
  "globPatterns": [
    "**/*.{css,html,js,json}",
    "**/{en,si}_flag.svg",
  ],
  "swDest": "service-worker.js",
  "swSrc": "src-sw.js"
};
