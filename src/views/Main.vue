<template>
  <main>
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
      <!-- Divider svg shape -->
      <svg
        style="margin-bottom: -3px"
        viewBox="0 0 1440 58"
        fill="var(--secondary-tint)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 58H720.001H1440L1440 26.2219C1440 26.2219 1301 85.2214 720.001 26.2219C139 -32.7776 0 26.2219 0 26.2219V58Z"
        />
      </svg>
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
import * as mainSections from "./main-sections";
import { threshold, onIntersect } from "@/state-management/observer";

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
#colored-banner {
  background: var(--secondary-color);
}
</style>