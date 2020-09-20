<template>
  <main>
    <Home />
    <Projects />
  </main>
</template>

<script>
// @ is an alias to /src
import Home from "./main-sections/Home";
import Projects from "./main-sections/Projects";

export default {
  name: "Main",
  components: { Home, Projects }
};
</script>

<style scoped>
</style>