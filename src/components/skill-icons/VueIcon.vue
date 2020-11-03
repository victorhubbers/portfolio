<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 167 147"
      fill="var(--secondary-text-color)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M133.579 0.0424225L133.6 0H102.809L83.5 33.9236V33.9378L64.2115 0H33.4209V0.0353518H0L83.5 147L167 0.0424225"
      />
    </svg>
    <p :style="{ width: width + 'px' }">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "VueIcon",
  props: {
    height: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      ratio: 167 / 147 //width over height
    };
  },
  computed: {
    width() {
      return this.height * this.ratio;
    },
    text() {
      return this.$vuetify.breakpoint.smAndDown ? "Vue" : "Vue.js";
    }
  }
};
</script>

<style scoped>
p {
  margin-top: 2rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.8rem;
  color: var(--secondary-text-color);
}
</style>