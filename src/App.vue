<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { setTheme } from "@/state-management/styling";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
    padding() {
      switch (this.breakpoint) {
        case "xs":
          return "6vw";
        case "sm":
          return "7vw";
        case "md":
          return "8vw";
        case "lg":
          return "9vw";
        case "xl":
          return "9vw";
        default:
          return "9vw";
      }
    }
  },
  watch: {
    locale() {
      this.$router.replace({ params: { lang: this.locale } }).catch(() => {});
    },
    breakpoint() {
      this.setPadding();
    }
  },
  created() {
    setTheme();
    this.setPadding();
  },
  methods: {
    setPadding() {
      let root = document.documentElement;
      root.style.setProperty("--side-padding", this.padding);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* all section titles same styling */
.section-title {
  font-weight: bold;
  font-size: 3.6rem;
  color: var(--primary-text-color);
}
.section-title.secondary {
  color: var(--secondary-text-color);
}

#app {
  font-family: "Montserrat", sans-serif;
  background: var(--primary-color);
  box-sizing: border-box;
}

/* 1 rem = 10px */
:root {
  font-size: 10px;
  scroll-behavior: smooth;
}

:root[theme="winter"] {
  --primary-color: #022b3a;
  --primary-tint: #043749;
  --secondary-color: #bfdbf7;
  --secondary-tint: #d1e5fa;
  --accent-color: #03ff77;

  --cta-text-color: #022b3a;
  --primary-text-color: #ffffff;
  --secondary-text-color: #022b3a;

  --mobile-listdot-url: url(assets/greendot.svg);
  --background-url: url(assets/mountains-big.jpg);
  --background-blend-mode: lighten;
  --hero-gradient: linear-gradient(
    180deg,
    rgba(15, 8, 75, 0.14) 26.56%,
    rgba(15, 8, 75, 0) 64.06%
  );
}

:root[theme="summer"] {
  --primary-color: #f4e2d6;
  --primary-tint: #fed3c1;
  --secondary-color: #9ee488;
  --secondary-tint: #aff299;
  --accent-color: #8c08ba;

  --cta-text-color: #ffffff;
  --primary-text-color: #000000;
  --secondary-text-color: #000000;

  --mobile-listdot-url: url(assets/purpledot.svg);
  --background-url: url(assets/boats-big.jpg);
  --background-blend-mode: normal;
  --hero-gradient: linear-gradient(
    180deg,
    rgba(244, 226, 214, 0) 96.35%,
    #f4e2d6 100%
  );
}

html.transition,
html.transition *,
html.transition *:after,
html.transition *:before {
  transition: all 300ms !important;
  transition-delay: 0 !important;
}
</style>
