import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/rules",
      name: "rules",
      component: () =>
        import("./views/Rules.vue")
    },
    {
      path: "/type",
      name: "type",
      component: () =>
        import("./views/Type.vue")
    },
    {
      path: "/display/:text",
      name: "display",
      component: () =>
        import("./views/Display.vue")
    }
  ]
});
