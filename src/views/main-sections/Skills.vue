<template>
  <section id="skills">
    <h2 class="section-title secondary">Skills</h2>
    <v-container fluid>
      <v-row style="align-items: center">
        <v-col cols="12" lg="4">
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            <br />
            <br />
            foresee the pain and trouble that are bound to ensue; and equal of
            will, which is the same as saying thl
          </p>
        </v-col>
        <v-col v-if="!onPhone" cols="12" lg="8" style="height: fit-content">
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
          return 65;
        case "lg":
          return 55;
        case "xl":
          return 70;
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
  padding: 5rem 9vw 7rem;
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
}
</style>