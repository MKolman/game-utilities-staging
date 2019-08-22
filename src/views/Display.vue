<template>
  <div class="fullscreen">
    <span id="fullscreenTxt" v-bind:style="{transform: 'scale('+zoom+')'}" v-bind:class="{vertical: isVertical}">{{ $route.params.text }}</span>
    <router-link to="/" class="close">✕</router-link>
  </div>
</template>

<script>

export default {
  name: "display",
  data() {
    return {
      zoom: 1,
      isVertical: false,
    }
  },
  methods: {
    fullscreenify() {
      let element = document.getElementById("fullscreenTxt");
      let width = element.offsetWidth;
      let height = element.offsetHeight;
      if (this.isVertical) {
        [width, height] = [height, width];
      }
      if ((window.innerWidth < window.innerHeight) != (width < height)) {
        [width, height] = [height, width];
        this.isVertical = true;
      } else {
        this.isVertical = false;
      }
      let zoom = Math.min(window.innerWidth/width, window.innerHeight/height);
      this.zoom = zoom * 0.9;
    },
  },
  mounted: function () {
    this.fullscreenify();
    window.addEventListener('resize', this.fullscreenify)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.fullscreenify)
  }
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
  writing-mode: vertical-rl;
}
</style>
