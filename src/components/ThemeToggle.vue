<template>
  <div id="toggle">
    <!-- icon -->
    <v-icon size="3rem" color="#fff">mdi-snowflake</v-icon>

    <!-- actual switch -->
    <span
      class="toggle-container"
      role="checkbox"
      :aria-checked="summer.toString()"
      tabindex="0"
      @click="toggle"
    >
      <span class="toggle-indicator" :style="indicatorStyles" />
    </span>

    <!-- icon -->
    <v-icon size="3rem" color="#fff">mdi-white-balance-sunny</v-icon>
  </div>
</template>

<script>
export default {
  name: "CustomToggle",
  data() {
    return {
      summer: false
    };
  },
  computed: {
    indicatorStyles() {
      return {
        transform: this.summer ? "translateX(27px)" : "translateX(2px)"
      };
    }
  },
  methods: {
    toggle() {
      this.summer = !this.summer;
    }
  }
};
</script>

<style>
#toggle {
  display: flex;
  align-items: center;
  margin-left: 4rem;
}

.toggle-container {
  margin: 0 1rem;
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 45px;
  height: 18px;
  border-radius: 25px;
  border: 2px solid #ffffff;
}

.toggle-container:focus {
  outline: 0;
}

.toggle-indicator {
  margin-top: 1px;
  position: absolute;
  height: 12px;
  width: 12px;
  background-color: #03ff77;
  border-radius: 25px;
  transition: transform 0.4s ease;
}
</style>