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

    <Contact
      v-intersect="{
        handler: onIntersect,
        options: { threshold }
      }"
    />
  </main>
</template>

<script>
// @ is an alias to /src
import * as mainSections from "./main-sections"
import { threshold, onIntersect } from "@/utils/observer";

export default {
  name: "Main",
  components: { ...mainSections },
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