import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Home" }
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("./views/Rules.vue"),
      meta: { title: "Rules" }
    },
    {
      path: "/type",
      name: "type",
      component: () => import("./views/Type.vue"),
      meta: { title: "Type" }
    },
    {
      path: "/draw",
      name: "draw",
      component: () => import("./views/Draw.vue"),
      meta: { title: "Draw" }
    },
    {
      path: "/display/:text",
      name: "display",
      component: () => import("./views/Display.vue"),
      meta: { title: "Display" }
    }
  ]
});
