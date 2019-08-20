<template>
  <div class="home container">
    <span onclick="showFullscreenCanvas();" class="btn" style="font-family: 'Cookie', Helvetica, sans-serif;">
        <span>DRAW</span>
    </span>
    <router-link to="/type" class="btn" style="font-family: 'monospace';">
        <span>TYPE<span class="blink">|</span></span>
    </router-link>
    <h1>RANDOM WORD
        <span style="white-space: nowrap">
            <input class="lang" type="radio" name="lang" id="lang-en" value="en" checked=""/><label for="lang-en"><img src="img/en_flag.svg" alt="en"/></label><input class="lang" type="radio" name="lang" id="lang-si" value="si"/><label for="lang-si"><img src="img/si_flag.svg" alt="si"/></label>
        </span>
    </h1>
    <span onclick="showRandomWord('unique');" class="btn" style="font-family: 'serif';">
        <span>UNIQUE</span>
    </span>
    <span onclick="showRandomWord('alias');" class="btn" style="font-family: 'serif';">
        <span>ALIAS</span>
    </span>
    <Score/>
    <h1>
      <router-link to="/rules">Rules</router-link>
    </h1>
    <div class="footer">
        Hosted on <a href="https://github.com/MKolman/game-utilities">GitHub</a>. Go to the <a href="https://www.kolman.si">home page</a>.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Score from "@/components/Score.vue";

export default {
  name: "home",
  components: {
    Score
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
// Button
.btn {
    cursor: pointer;
    display: inline-table;
    width: 49%;
    margin-right: 0.5%;
    background-color: $theme-color;
    color: white;
    border-radius: 1em;
    font-size: 3em;
    height: 1.5em;
    text-align: center;
    margin-bottom: 0.5em;
    text-decoration: none;
    > span {
        display: table-cell;
        vertical-align: middle;
    }
}

@media screen and (max-width: 800px) {
    .btn {
        width: 100%
    }
}

// Lang
input.lang {
    display: none;
}
input[type="radio"].lang+label img {
    height: 0.5em;
    border: 3px solid rgba(0, 0, 0, 0);
    border-radius: 4px;
}
input[type="radio"].lang:checked+label img{
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
