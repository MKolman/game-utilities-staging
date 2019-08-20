<template>
  <div id="rules" class="container">
    <h1>
      <router-link to="/">Back</router-link>
    </h1>
    <Rule v-bind:img="img" v-for="img in images" />
    <h1>
      <router-link to="/">Play Now</router-link>
    </h1>
  </div>
</template>

<script>
import Rule from "@/components/Rule.vue";

export default {
  name: "rules",
  components: {
    Rule
  },
  data() {
    return {
      images: [
      {
        id: 1,
        src: "img/unique/unique_rules_1.svg",
        desc: "Pick a random word and show it to other players."
      }, {
        id: 2,
        src: "img/unique/unique_rules_2.svg",
        desc: "Other players write and compare hints for you."
      }, {
        id: 3,
        src: "img/unique/unique_rules_3.svg",
        desc: "They remove duplicate hints."
      }, {
        id: 4,
        src: "img/unique/unique_rules_4.svg",
        desc: "You can look at the remaining hints."
      }, {
        id: 5,
        src: "img/unique/unique_rules_5.svg",
        desc: "You can guess the word or pass."
      }]
    };
  }
};
  //   rules:
</script>
