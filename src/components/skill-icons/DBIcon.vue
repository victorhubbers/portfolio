<template>
  <div>
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 114 147"
      fill="var(--secondary-text-color)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 54.6V73.5C0 91.35 24.8727 105 57 105C89.1273 105 114 91.35 114 73.5V54.6C102.6 66.15 81.8727 73.5 57 73.5C32.1273 73.5 11.4 66.15 0 54.6Z"
      />
      <path
        d="M0 96.6V115.5C0 133.35 24.8727 147 57 147C89.1273 147 114 133.35 114 115.5V96.6C102.6 108.15 81.8727 115.5 57 115.5C32.1273 115.5 11.4 108.15 0 96.6Z"
      />
      <path
        d="M57 63C88.4802 63 114 48.897 114 31.5C114 14.103 88.4802 0 57 0C25.5198 0 0 14.103 0 31.5C0 48.897 25.5198 63 57 63Z"
      />
    </svg>

    <p :style="{ width: width + 'px' }">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "DBIcon",
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
      return this.$vuetify.breakpoint.smAndDown ? "SQL" : "SQL Databases";
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