import Vue from "vue";

const winter = {
  primary: "#022B3A",
  primaryTint: "#043749",
  secondary: "#BFDBF7",
  secondaryTint: "#D1E5FA",
  accent: "#03FF77",

  textPrimary: "#ffffff",
  textSecondary: "#022B3A",

  backgroundUrl: "../assets/mountains-big.jpg",
};

const summer = {
  primary: "#F4E2D6",
  primaryTint: "#FED3C1",
  secondary: "#9EE488",
  secondaryTint: "#AFF299",
  accent: "#8C08BA",

  textPrimary: "#000000",
  textSecondary: "#000000",

  backgroundUrl: "",
};

export const styles = Vue.observable({
  isItSummer: false,
  theme: winter,
});

export function switchTheme() {
  if (styles.theme === winter) {
    styles.theme = summer;
    styles.isItSummer = true;
  } else {
    styles.theme = winter;
    styles.isItSummer = false;
  }
}
