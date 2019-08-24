import Vue from "vue";
import VueAnalytics from "vue-analytics";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

router.beforeEach((to, from, next) => {
  document.title = process.env.VUE_APP_TITLE + " | " + to.meta.title;
  next();
});

Vue.use(VueAnalytics, {
  id: "UA-42885055-4",
  router,
  autoTracking: {
    pageviewTemplate(route) {
      return {
        page:
          window.location.pathname + window.location.search + "#" + route.name,
        title: document.title,
        location: window.location.href
      };
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
