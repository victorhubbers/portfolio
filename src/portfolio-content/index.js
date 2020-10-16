// The fields that need translations are found in src > locales, accessed through the vue-i18n plugin.

const projects = {
  quizzion: {
    type: "group",
    coverImage: require(`../assets/cover-images/quizzion.webp`),
    demo: {
      type: "video",
      asset: "",
      codeLink: "",
      liveLink: "",
    },
    technologies: ["Vue.js", "Vuex", "AWS", "Quasar", "Node.js", "Firebase"],
  },
  portfolio: {
    type: "solo",
    coverImage: require(`../assets/cover-images/portfolio.webp`),
    demo: {
      type: "video",
      asset: require(`../assets/demos/portfolio.mp4`),
      codeLink: "https://github.com/victorhubbers/portfolio",
      liveLink: "/",
    },
    technologies: ["Figma", "Vue.js", "Vuetify", "Vue-i18n", "Netlify"],
  },
  cards: {
    type: "solo",
    coverImage: require(`../assets/cover-images/cards.webp`),
    demo: {
      type: "video",
      asset: require(`../assets/demos/cards.webm`),
      codeLink: "https://github.com/victorhubbers/Playing-Cards",
      liveLink: "https://cards.victorhubbers.com",
    },
    technologies: ["Vue.js", "Vuex", "AWS S3"],
  },
  javalite: {
    type: "solo",
    coverImage: require(`../assets/cover-images/javalite.webp`),
    demo: {
      type: "video",
      asset: require(`../assets/demos/javalite.webm`),
      codeLink: "https://github.com/victorhubbers/JavaLite",
      liveLink: "https://javalite.victorhubbers.com",
    },
    technologies: ["Java", "ANTLR4", "Jasmin bytecode", "JUnit5.2", "CheerpJ"],
  },
};

export { projects };
