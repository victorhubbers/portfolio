<template>
  <div>
    <h3>
      {{ $t("projectOverview.myContributions") }}
    </h3>
    <ul class="text">
      <li v-for="(contribution, idx) in contributions" :key="idx">
        {{ contribution }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GroupContributionList",
  props: {
    contributions: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
h3 {
  margin-top: 5rem;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--primary-text-color);
}

.text {
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  color: var(--primary-text-color);
}

li {
  margin: 1rem 0;
}
</style>