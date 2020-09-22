<template>
  <main id="">
    <Home
      v-intersect="{
        handler: onIntersect,
        options: { threshold }
      }"
    />
    <Projects
      v-intersect="{
        handler: onIntersect,
        options: { threshold }
      }"
    />

    <div id="colored-banner">
      <About
        v-intersect="{
          handler: onIntersect,
          options: { threshold }
        }"
      />
      <Skills
        v-intersect="{
          handler: onIntersect,
          options: { threshold }
        }"
      />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Home from "./main-sections/Home";
import Projects from "./main-sections/Projects";
import About from "./main-sections/About";
import Skills from "./main-sections/Skills";
import { threshold, onIntersect } from "@/utils/observer";

export default {
  name: "Main",
  components: { Home, Projects, About, Skills },
  data() {
    return {
      threshold
    };
  },
  methods: {
    onIntersect
  }
};
</script>

<style scoped>
</style>