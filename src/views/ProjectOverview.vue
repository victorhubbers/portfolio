<template>
  <div id="project-AA">
    <h2 class="section-title">{{ project.title }}</h2>

    <ul>
      <li v-for="(highlight, idx) in project.highlights" :key="idx">
        {{ highlight }}
      </li>
    </ul>

    <p>{{ project.description }}</p>

    <div id="demo"></div>

    <div id="chip-container">
      <v-chip
        v-for="(technology, index) in technologies"
        :key="index"
        color="var(--secondary-color)"
        >{{ technology }}</v-chip
      >
    </div>

    <v-btn :dark="themeState.isItSummer" color="var(--accent-color)" depressed
      >Visit</v-btn
    >
    <v-btn outlined color="var(--accent-color)" depressed>View code</v-btn>
  </div>
</template>

<script>
import { themeState } from "@/styling";
export default {
  name: "ProjectOverview",
  data() {
    return {
      themeState,
      project: {
        title: "Quizzion 2.0",
        highlights: [
          "Multicultural team",
          "External API",
          "New framework",
          "Complete process",
          "Daily stand-ups"
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      technologies: ["Vue.js", "AWS", "Quasar", "Node.js", "Firebase"]
    };
  }
};
</script>

<style scoped>
#project-AA {
  width: 100%;
  padding: 12rem 9vw 7rem;
  height: 200vh;
}

ul {
  margin-top: 5rem;
  list-style-type: none;
  color: var(--primary-text-color);
  line-height: 2.6rem;
  font-size: 2rem;
  font-weight: 400;
}
ul > li:before {
  content: "-";
}

p {
  margin-top: 5rem;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.4rem;
  color: var(--primary-text-color);
}

#demo {
  width: 100%;
  height: 30vh;
  background: grey;
}

.v-chip {
  padding: 1rem 2rem;
  margin: 1rem 1.5rem 0rem 0rem;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

.v-btn {
  font-weight: bold;
  font-size: 1.3rem !important;
}
</style>