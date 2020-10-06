<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card color="var(--primary-tint)">
        <v-img height="200" :src="projectImage"></v-img>

        <v-card-title>
          <h3 id="project-title">
            {{ $t(`portfolioContent.projects.${projectKey}.title`) }}
          </h3>
        </v-card-title>

        <v-card-text>
          <p id="project-one-liner">
            {{ $t(`portfolioContent.projects.${projectKey}.oneLiner`) }}
          </p>
        </v-card-text>

        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#000000">
            <v-btn
              :light="!themeState.isItSummer"
              color="var(--accent-color)"
              depressed
              :to="{
                name: `Project Overview`,
                params: { projectKey }
              }"
              >{{ $t("projectOverview.moreInfoButton") }}</v-btn
            >
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
import { themeState } from "@/state-management/styling";
export default {
  name: "ProjectCard",
  props: {
    projectKey: {
      type: String,
      required: true,
      default() {
        return "Not Found";
      }
    },
    projectImage: {
      type: String,
      required: true,
      default() {
        return "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg";
      }
    }
  },
  data() {
    return {
      themeState
    };
  }
};
</script>

<style scoped>
#project-title {
  font-weight: 500;
  font-size: 2.5rem;
  color: var(--primary-text-color);
}

#project-one-liner {
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: var(--primary-text-color);
}

.v-btn {
  font-weight: 500;
  font-size: 1rem !important;
}
</style>