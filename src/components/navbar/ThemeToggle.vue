<template>
  <div id="toggle">
    <!-- icon -->
    <v-icon size="3rem" :color="styles.theme.textPrimary">mdi-snowflake</v-icon>

    <!-- actual switch -->
    <span
      class="toggle-container"
      :style="{ border: '2px solid' + styles.theme.textPrimary }"
      role="checkbox"
      :aria-checked="styles.isItSummer.toString()"
      tabindex="0"
      @click="switchTheme"
    >
      <span class="toggle-indicator" :style="indicatorStyles" />
    </span>

    <!-- icon -->
    <v-icon size="3rem" :color="styles.theme.textPrimary"
      >mdi-white-balance-sunny</v-icon
    >
  </div>
</template>

<script>
import { styles, switchTheme } from "@/styling";

export default {
  name: "ThemeToggle",
  data() {
    return {
      styles
    };
  },
  computed: {
    indicatorStyles() {
      return {
        transform: this.styles.isItSummer
          ? "translateX(27px)"
          : "translateX(2px)",
        "background-color": styles.theme.accent
      };
    }
  },
  methods: {
    switchTheme
  }
};
</script>

<style>
#toggle {
  display: flex;
  align-items: center;
}

.toggle-container {
  margin: 0 1rem;
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 45px;
  height: 18px;
  border-radius: 25px;
}

.toggle-container:focus {
  outline: 0;
}

.toggle-indicator {
  margin-top: 1px;
  position: absolute;
  height: 12px;
  width: 12px;
  border-radius: 25px;
  transition: transform 0.4s ease;
}
</style>