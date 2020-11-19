import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import titleMixin from "./mixins/titleMixin";
import { loadProjects } from "./portfolio-content";

(async function() {
  Vue.mixin(titleMixin);

  Vue.prototype.$projects = await loadProjects();

  Vue.config.productionTip = false;

  new Vue({
    router,
    vuetify,
    i18n,
    render: (h) => h(App),
  }).$mount("#app");
})();
