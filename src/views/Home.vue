<template>
  <div class="home container">
    <router-link
      to="/draw"
      class="btn"
      style="font-family: 'Cookie', Helvetica, sans-serif;"
    >
      <span>DRAW</span>
    </router-link>
    <router-link to="/type" class="btn" style="font-family: 'monospace';">
      <span>TYPE<span class="blink">|</span></span>
    </router-link>
    <h1>
      RANDOM WORD
      <span style="white-space: nowrap">
        <input
          v-model="lang"
          class="lang"
          type="radio"
          name="lang"
          id="lang-en"
          value="en"
          checked=""
        /><label for="lang-en"><img src="img/en_flag.svg" alt="en"/></label
        ><input
          v-model="lang"
          class="lang"
          type="radio"
          name="lang"
          id="lang-si"
          value="si"
        /><label for="lang-si"><img src="img/si_flag.svg" alt="si"/></label>
      </span>
    </h1>
    <WordButton v-bind:list="words[lang]['unique']" txt="UNIQUE" />
    <WordButton v-bind:list="words[lang]['alias']" txt="ALIAS" />
    <Score />
    <h1>
      <router-link to="/rules">Rules</router-link>
    </h1>
    <div class="footer">
      Hosted on <a href="https://github.com/MKolman/game-utilities">GitHub</a>.
      Go to the <a href="https://www.kolman.si">home page</a>.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Score from "@/components/Score.vue";
import WordButton from "@/components/WordButton.vue";
import words from "@/data/words.json";

export default {
  name: "home",
  components: {
    Score,
    WordButton
  },
  data() {
    return {
      lang: "en",
      words: words
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Cookie");
// Button
.btn {
  // Size
  width: 49%;
  height: 1.5em;
  margin-right: 0.5%;
  margin-bottom: 0.5em;
  // Colors
  background-color: $theme-color;
  color: white;
  // Text
  font-size: 3em;
  text-decoration: none;
  // Feel like a button
  cursor: pointer;
  border: none;
  border-radius: 1em;
  // Make sure the content is center aligned
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
}

@media screen and (max-width: 800px) {
  .btn {
    width: 100%;
  }
}

// Lang
input.lang {
  display: none;
}
input[type="radio"].lang + label img {
  height: 0.5em;
  border: 3px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
}
input[type="radio"].lang:checked + label img {
  border-color: $theme-color;
}

.footer {
  margin-top: 5em;
}

.blink {
  animation-duration: 0.8s;
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
