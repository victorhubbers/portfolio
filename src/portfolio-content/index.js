// The fields that need translations are found in src > locales, accessed through i18n

const projects = {
  quizzion: {
    type: "group",
    coverImage: "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg",
    demo: {
      type: "video",
      asset: "",
      codeLink: false,
      liveLink: "",
    },
    technologies: ["Vue.js", "Vuex", "AWS", "Quasar", "Node.js", "Firebase"],
  },
  portfolio: {
    type: "solo",
    coverImage: "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg",
    demo: {
      type: "video",
      asset: "",
      codeLink: "https://github.com/victorhubbers/portfolio",
      liveLink: "/",
    },
    technologies: ["Figma", "Vue.js", "Vuetify", "Vue-i18n", "Netlify"],
  },
  cards: {
    type: "solo",
    coverImage: "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg",
    demo: {
      type: "video",
      asset: require(`../assets/PlayingCards.webm`),
      codeLink: "https://github.com/victorhubbers/Playing-Cards",
      liveLink: "https://youthful-heyrovsky-47674a.netlify.app",
    },
    technologies: ["Vue.js", "Vuex", "AWS S3"],
  },
  javalite: {
    type: "solo",
    coverImage: "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg",
    demo: {
      type: "image",
      asset: "",
      codeLink: "https://github.com/victorhubbers/JavaLite",
      liveLink: "https://javalite.netlify.app",
    },
    technologies: ["Java", "ANTLR4", "Jasmin bytecode", "JUnit5.2", "CheerpJ"],
  },
};

export { projects };
