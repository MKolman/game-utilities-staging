<template>
  <div class="fullscreen">
    <span>{{ $route.params.text }}</span>
    <router-link to="/" class="close">✕</router-link>
  </div>
</template>

<script>
export default {
  name: "display"
};
</script>

<style scoped lang="scss">
.fullscreen {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
.close {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 3em;
  text-decoration: none;
}
.vertical {
  & > span {
    writing-mode: vertical-rl;
  }
}
</style>
