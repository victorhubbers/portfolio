<template>
  <v-row id="chip-row" no-gutters>
    <v-chip
      v-for="(chip, index) in chips"
      :key="index"
      small
      color="var(--secondary-color)"
      >{{ chip }}</v-chip
    >
  </v-row>
</template>

<script>
export default {
  name: "ChipRow",
  props: {
    chips: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.v-chip {
  padding: 1rem 2rem;
  margin: 0.5rem 1rem 0.5rem 0rem;
  font-weight: 500;
  font-size: 1.6rem;
}

#chip-row {
  margin: 0.5rem 0;
}
</style>