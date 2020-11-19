import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "@/plugins/i18n";
import Main from "@/views/Main.vue";
import ViewWrapper from "@/ViewWrapper.vue";
import { loadProjects } from "@/portfolio-content";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    beforeEnter(to, from, next) {
      next(i18n.locale);
    },
  },
  {
    path: "/:lang",
    component: ViewWrapper,
    beforeEnter(to, from, next) {
      let lang = to.params.lang;
      if (lang === "nl" || lang === "en") {
        if (i18n.locale != lang) i18n.locale = lang;
        return next();
      } else {
        return next(`/${i18n.locale}`);
      }
    },
    children: [
      {
        path: "",
        name: "Main",
        component: Main,
      },
      {
        path: "projects/:projectKey",
        name: "Project Overview",
        beforeEnter: async (to, from, next) => {
          const projectExists = Object.prototype.hasOwnProperty.call(
            await loadProjects(),
            to.params.projectKey
            );

          if (projectExists) next();
          else next({ path: `${i18n.locale}/404` });
        },
        component: () => import("@/views/ProjectOverview.vue"),
      },
      {
        path: "*",
        redirect: { name: "Not Found" },
      },
      {
        path: "404",
        name: "Not Found",
        component: () => import("@/views/Error404.vue"),
      },
    ],
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
