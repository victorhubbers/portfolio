<template>
  <div id="toggle">
    <v-icon color="var(--primary-text-color)" size="3rem">mdi-snowflake</v-icon>

    <!-- actual switch -->
    <span
      class="toggle-container"
      role="checkbox"
      :aria-checked="themeState.isItSummer.toString()"
      tabindex="0"
      @click="switchTheme"
    >
      <span class="toggle-indicator" :style="indicatorState" />
    </span>

    <v-icon color="var(--primary-text-color)" size="3rem"
      >mdi-white-balance-sunny</v-icon
    >
  </div>
</template>

<script>
import { themeState, switchTheme } from "@/state-management/styling";

export default {
  name: "ThemeToggle",
  data() {
    return {
      themeState
    };
  },
  computed: {
    indicatorState() {
      return {
        transform: this.themeState.isItSummer
          ? "translateX(27px)"
          : "translateX(2px)"
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
  border: 2px solid var(--primary-text-color);
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
  background: var(--accent-color);
  margin-top: 1px;
  position: absolute;
  height: 12px;
  width: 12px;
  border-radius: 25px;
}
</style>