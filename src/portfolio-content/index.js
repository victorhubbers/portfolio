// The fields that need translations are found in src > locales, accessed through i18n

const projects = {
  quizzion: {
    type: "group",
    image: "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg",
    demo: {
      previewType: "video",
      previewAsset: "",
      codeAvailable: false,
      liveLink: "",
    },
    technologies: ["Vue.js", "Vuex", "AWS", "Quasar", "Node.js", "Firebase"],
  },
  portfolio: {
    type: "solo",
    image: "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg",
    demo: {
      previewType: "slideshow",
      previewAsset: "",
      codeAvailable: true,
      liveLink: "/",
    },
    technologies: ["Figma", "Vue.js", "Vuetify", "Vue i18n", "Netlify"],
  },
  cards: {
    type: "solo",
    image: "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg",
    demo: {
      previewType: "gif",
      previewAsset: "",
      codeAvailable: true,
      liveLink: "",
    },
    technologies: ["Vue.js", "Vuex", "AWS S3"],
  },
  javalite: {
    type: "group",
    image: "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg",
    demo: {
      previewType: "image",
      previewAsset: "",
      codeAvailable: false,
      liveLink: "",
    },
    technologies: ["Java", "ANTLR4", "Jasmin bytecode", "JUnit4"],
  },
};

export { projects };
