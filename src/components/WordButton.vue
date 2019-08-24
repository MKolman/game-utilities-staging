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
          "linear-gradient(90deg, " +
          this.colorLeft +
          " " +
          this.load * 100 +
          "%, " +
          this.colorRight +
          " " +
          this.load * 100 +
          "%)"
      };
    }
  },
  methods: {
    randomElement: function(collection) {
      return collection[Math.floor(Math.random() * collection.length)];
    },
    animateButton: function() {
      let colors = ["#D32F2F", "#fdcd3b", "blue", "green"];
      let section = 0,
        stepsTotal = 100,
        step = 0;
      this.colorRight = colors[section];
      this.colorLeft = colors[section + 1];
      this.interval = setInterval(() => {
        step += 1;
        this.load += (colors.length - 1) / stepsTotal;
        if (step > stepsTotal) {
          clearInterval(this.interval);
        }
        if (this.load > 1) {
          section += 1;
          this.colorRight = colors[section];
          this.colorLeft = colors[section + 1];
          this.load = 0;
        }
      }, 3000 / stepsTotal);
    },
    showRandomWord: function() {
      if (this.timeout) {
        this.load = 0;
        clearTimeout(this.timeout);
        clearInterval(this.interval);
        this.colorRight = "#D32F2F";
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
      this.animateButton();
    }
  },
  data() {
    return {
      load: 0,
      colorLeft: "#fdcd3b",
      colorRight: "#D32F2F",
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
