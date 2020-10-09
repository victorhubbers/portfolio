<template>
  <section id="skills">
    <h2 class="section-title secondary">{{ $t("sectionTitles.skills") }}</h2>
    <v-container fluid>
      <v-row style="align-items: center">
        <v-col cols="12" xl="5">
          <p>{{ $t("portfolioContent.skillsText") }}</p>
        </v-col>
        <v-col v-if="!onPhone" cols="12" xl="7" style="height: fit-content">
          <v-row no-gutters style="justify-content: space-between">
            <VueIcon class="icon" :height="iconHeight" />
            <NodeIcon class="icon" :height="iconHeight" />
            <JavaIcon class="icon" :height="iconHeight" />
            <AWSIcon class="icon" :height="iconHeight" />
            <DBIcon class="icon" :height="iconHeight" />
            <GitIcon class="icon" :height="iconHeight" />
          </v-row>
        </v-col>
        <v-col v-if="onPhone" cols="12" style="height: fit-content">
          <v-row no-gutters style="justify-content: space-between">
            <VueIcon class="icon" :height="iconHeight" />
            <NodeIcon class="icon" :height="iconHeight" />
            <JavaIcon class="icon" :height="iconHeight" />
          </v-row>
        </v-col>
        <v-col v-if="onPhone" cols="12" style="height: fit-content">
          <v-row no-gutters style="justify-content: space-between">
            <AWSIcon class="icon" :height="iconHeight" />
            <DBIcon class="icon" :height="iconHeight" />
            <GitIcon class="icon" :height="iconHeight" />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import * as icons from "@/components/skill-icons";

export default {
  name: "Skills",
  components: {
    ...icons
  },
  data() {
    return {};
  },
  computed: {
    iconHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 45;
        case "sm":
          return 50;
        case "md":
          return 55;
        case "lg":
          return 60;
        case "xl":
          return 60;
        default:
          return 0;
      }
    },
    onPhone() {
      return this.$vuetify.breakpoint.name === "xs";
    }
  }
};
</script>

<style scoped>
#skills {
  width: 100%;
  padding: 3rem var(--side-padding) 7rem;
  background: var(--secondary-tint);
}

/* vuetify container class */
.container {
  padding: 0;
  margin-top: 2rem;
}
p {
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.6rem;
  color: var(--secondary-text-color);

  white-space: pre-wrap;
}
</style>