<template>
  <button v-on:click="showRandomWord()" class="btn" v-bind:style="style">
    <span>{{ txt }}</span>
  </button>
</template>

<script>
import router from "@/router.js";

export default {
  name: "WordButton",
  props: {
    list: Array,
    txt: String
  },
  computed: {
    style: function() {
      return {
        background:
          "linear-gradient(110deg, #fdcd3b " +
          this.load * 100 +
          "%, #D32F2F " +
          this.load * 100 +
          "%)"
      };
    }
  },
  methods: {
    randomElement: function(collection) {
      return collection[Math.floor(Math.random() * collection.length)];
    },
    showRandomWord: function() {
      if (this.timeout) {
        this.load = 0;
        clearTimeout(this.timeout);
        clearInterval(this.interval);
        this.timeout = null;
        this.interval = null;
        return;
      }
      this.timeout = setTimeout(() => {
        router.push({
          name: "display",
          params: {
            text: this.randomElement(this.list)
          }
        });
      }, 3000);
      let steps = 100;
      this.interval = setInterval(() => {
        this.load += 1 / steps;
      }, 3000 / steps);
    }
  },
  data() {
    return {
      load: 0,
      timeout: null,
      interval: null
    };
  }
};
// background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
</script>

<style scoped lang="scss">
.btn {
  font-family: "serif";
}
</style>
