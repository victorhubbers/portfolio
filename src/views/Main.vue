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
  </main>
</template>

<script>
// @ is an alias to /src
import Home from "./main-sections/Home";
import Projects from "./main-sections/Projects";
import { threshold, onIntersect } from "@/utils/observer";

export default {
  name: "Main",
  components: { Home, Projects },
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