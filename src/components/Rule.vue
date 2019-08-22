<template>
  <div>
    <h1>{{ img.id }} {{ img.desc }}</h1>
    <div class="centered">
      <img class="size-limit" v-bind:src="img.src" v-bind:alt="img.desc" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Rule",
  props: {
    img: Object
  }
};
</script>

<style scoped lang="scss">
h1 {
  text-align: left;
}
.centered {
  text-align: center;
}
.size-limit {
  max-width: 80%;
}
</style>
