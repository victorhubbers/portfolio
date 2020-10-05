<template>
  <div id="error-page"></div>
</template>

<script>
import { currentSection } from "@/state-management/observer";
export default {
  name: "Error404",
  data() {
    return {
      currentSection
    };
  },
  mounted() {
    this.currentSection.id = "";
  }
};
</script>

<style scoped>
#error-page {
  height: calc(100vh - 100px);
  width: 100vw;
  background-color: var(--primary-color);
}
</style>