<template>
  <div class="container">
    <router-link to="/" class="close">✕</router-link>

    <input type="text" ref="type" v-model="text" />
    <router-link
      v-bind:to="{ name: 'display', params: { text: text || 'placeholder' } }"
      class="btn"
    >
      <span>SHOW</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "type",
  data() {
    return {
      text: ""
    }
  }
};
</script>

<style scoped lang="scss">
.close {
  text-align: left;
  width: 100%;
  display: inline-block;
  text-decoration: none;
  font-size: 3em;
}
.container {
  margin-top: 0;
}
.btn {
  margin-top: 1em;
}

input {
  text-align: center;
  border: none;
  font-size: 3em;
  width: 100%;
}
</style>
