import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import { projects } from "@/portfolio-content";

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
    beforeEnter: (to, from, next) => {
      const projectExists = Object.prototype.hasOwnProperty.call(
        projects,
        to.params.projectKey
      );

      if (projectExists) next();
      else next("/404");
    },
    component: () => import("@/views/ProjectOverview.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
  {
    path: "/404",
    name: "Not Found",
    component: () => import("@/views/Error404.vue"),
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
