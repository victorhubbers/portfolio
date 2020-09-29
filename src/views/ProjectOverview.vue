<template>
  <div id="project-details">
    <h2 class="section-title">{{ project.title }}</h2>

    <v-container fluid>
      <v-row>
        <!-- left, top/bottom -->
        <v-col cols="12" md="5">
          <ul>
            <li v-for="(highlight, idx) in project.highlights" :key="idx">
              {{ highlight }}
            </li>
          </ul>

          <p v-if="$vuetify.breakpoint.mdAndUp" style="margin-top: 5rem">
            {{ project.description }}
          </p>
        </v-col>

        <!-- right/middle -->
        <v-spacer></v-spacer>
        <v-col cols="12" md="6">
          <div id="demo"></div>

          <ChipRow :chips="project.technologies" />

          <v-row id="button-row" no-gutters>
            <v-col cols="5" md="3" lg="2">
              <v-btn
                :dark="themeState.isItSummer"
                block
                color="var(--accent-color)"
                depressed
              >
                {{ $t("projectOverview.visitButton") }}
                <v-icon :color="launchIconColor" right small>mdi-launch</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="2" md="1"><!-- spacer --></v-col>
            <v-col cols="5" md="3" lg="2">
              <v-btn outlined block color="var(--accent-color)" depressed>
                {{ $t("projectOverview.viewCodeButton") }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.mdAndUp">
          <p>{{ project.description }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { themeState } from "@/state-management/styling";
import { projects } from "@/portfolio-content";
import ChipRow from "@/components/ChipRow";

export default {
  name: "ProjectOverview",
  components: { ChipRow },
  data() {
    return {
      themeState,
      projectKey: this.$route.params.projectKey
    };
  },
  computed: {
    launchIconColor() {
      return themeState.isItSummer ? "white" : "var(--secondary-text-color)";
    },
    project() {
      return {
        //combines translations and other content into a single project object.
        ...projects[this.projectKey],
        ...this.$t(`portfolioContent.projects.${this.projectKey}`)
      };
    }
  }
};
</script>

<style scoped>
#project-details {
  width: 100%;
  min-height: calc(100vh - 100px);
  padding: 12rem 9vw 7rem;
}

/* vuetify container class */
.container {
  padding: 0;
  margin-top: 5rem;
}

ul {
  list-style-type: none;
  color: var(--primary-text-color);
  line-height: 2.6rem;
  font-size: 2rem;
  font-weight: 400;
}
ul > li:before {
  content: "-";
}

p {
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.4rem;
  color: var(--primary-text-color);
}

#demo {
  width: 100%;
  height: 40vh;
  background: grey;
}

#button-row {
  margin: 2rem 0;
}

.v-btn {
  font-weight: bold;
  font-size: 1.3rem !important;
}
</style>