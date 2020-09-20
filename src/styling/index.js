import Vue from "vue";

export const themeState = Vue.observable({
  isItSummer: false,
});

export function switchTheme() {
  if (themeState.isItSummer) {
    themeState.isItSummer = false;
    setTheme("winter");
  } else {
    themeState.isItSummer = true;
    setTheme("summer");
  }
}

//default theme is winter, called in created() @ App.vue
export function setTheme(theme = "winter") {
  let root = document.documentElement;
  root.classList.add("transition");
  root.setAttribute("theme", theme);

  setTimeout(() => {
    root.classList.remove("transition");
  }, 300);
}
