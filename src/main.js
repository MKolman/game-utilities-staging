import Vue from "vue";
import VueAnalytics from "vue-analytics";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

Vue.use(VueAnalytics, {
  id: "UA-42885055-4",
  router
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
