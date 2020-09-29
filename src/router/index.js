import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/projects/:projectKey",
    name: "Project Overview",
    component: () =>
      import(
        /* webpackChunkName: "project-overview" */ "../views/ProjectOverview.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash, offset: { x: 0, y: 25 } };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
