<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/scss/_variables.scss";

body {
  margin: 0;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-top: 5px solid $theme-color;
  background-color: $bg-color;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
a {
  color: $theme-color;
}

.container {
  margin: 3em auto;
  width: 800px;
  text-align: center;
}

@media screen and (max-width: 800px) {
  .container {
    width: 100%;
  }
}
</style>
