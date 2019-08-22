<template>
  <div>
    <h1>SCORE</h1>
    <span class="btn scr">
      <span v-on:click="score -= 5">–5</span
      ><span v-on:click="score -= 1" class="border">–1</span
      ><input type="number" v-bind:value="score" /><span
        v-on:click="score += 1"
        class="border"
        >+1</span
      ><span v-on:click="score += 5">+5</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Score",
  data() {
    return {
      score: 0
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.btn.scr {
  cursor: default;
  display: inline-block;
  > span {
    cursor: pointer;
    width: 19%;
    display: inline-block;
    height: 100%;
    font-size: smaller;
    padding-top: 0.33em;
    &.border {
      border-right: $bg-color 2px solid;
      border-left: $bg-color 2px solid;
    }
  }
  > input {
    width: 20%;
    margin: 0;
    padding: 0;
    height: 100%;
    display: inline-block;
    position: relative;
    vertical-align: top;
    border: none;
    font-size: 1em;
    text-align: center;
  }
}
/* Hide HTML5 Up and Down arrows. */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
