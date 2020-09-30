<template>
  <div id="project-details">
    <h2 class="section-title">{{ project.title }}</h2>

    <v-container fluid>
      <v-row>
        <!-- left, top/bottom -->
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="6">
          <p class="text">{{ project.description }}</p>

          <GroupContributionList
            v-if="project.type === 'group'"
            :contributions="project.contributions"
          />
        </v-col>

        <!-- right/middle -->
        <v-spacer></v-spacer>
        <v-col cols="12" md="5">
          <div id="demo"></div>

          <ChipRow :chips="project.technologies" />

          <v-row id="button-row" no-gutters>
            <v-col cols="12" sm="5">
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
            <v-col cols="0" sm="1" lg="2"></v-col>
            <v-col cols="12" sm="6" lg="5">
              <v-btn outlined block color="var(--accent-color)" depressed>
                {{ $t("projectOverview.viewCodeButton") }}</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.mdAndUp">
          <p class="text">{{ project.description }}</p>

          <GroupContributionList
            v-if="project.type === 'group'"
            :contributions="project.contributions"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { themeState } from "@/state-management/styling";
import { projects } from "@/portfolio-content";
import ChipRow from "@/components/ChipRow";
import GroupContributionList from "@/components/GroupContributionList";

export default {
  name: "ProjectOverview",
  components: { ChipRow, GroupContributionList },
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

.text {
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  color: var(--primary-text-color);
}

p {
  white-space: pre-wrap;
}

#demo {
  width: 100%;
  height: 40vh;
  background: grey;
}

#button-row div {
  margin: 0.5rem 0;
}

.v-btn {
  font-weight: bold;
  font-size: 1.3rem !important;
}
</style>