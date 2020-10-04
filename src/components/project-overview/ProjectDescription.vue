<template>
  <v-col cols="12" lg="6">
    <p class="text">{{ description }}</p>

    <GroupContributionList
      v-if="projectType === 'group'"
      :contributions="contributions"
    />
  </v-col>
</template>

<script>
import GroupContributionList from "@/components/project-overview/GroupContributionList";

export default {
  name: "ProjectDescription",
  components: { GroupContributionList },
  props: {
    projectType: {
      type: String,
      required: true
    },
    contributions: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.text {
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  color: var(--primary-text-color);
  white-space: pre-wrap;
}
</style>