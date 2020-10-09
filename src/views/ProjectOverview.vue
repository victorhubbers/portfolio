<template>
  <div id="project-details">
    <h2 class="section-title">{{ project.title }}</h2>

    <v-container fluid>
      <v-row>
        <ProjectDescription
          v-if="$vuetify.breakpoint.lgAndUp"
          :description="project.description"
          :project-type="project.type"
          :contributions="project.contributions"
        />
        <v-spacer></v-spacer>
        <v-col cols="12" lg="5">
          <ProjectDemo :cover-image="project.coverImage" :demo="project.demo" />

          <ChipRow :chips="project.technologies" />

          <ButtonRow
            :visit-link="project.demo.liveLink"
            :code-link="project.demo.codeLink"
          />
        </v-col>
        <ProjectDescription
          v-if="!$vuetify.breakpoint.lgAndUp"
          :description="project.description"
          :project-type="project.type"
          :contributions="project.contributions"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { projects } from "@/portfolio-content";
import ChipRow from "@/components/project-overview/ChipRow";
import ProjectDemo from "@/components/project-overview/ProjectDemo";
import ButtonRow from "@/components/project-overview/ButtonRow";
import ProjectDescription from "@/components/project-overview/ProjectDescription";
import { currentSection } from "@/state-management/observer";

export default {
  name: "ProjectOverview",
  title() {
    return `Victor Hubbers - ${this.project.title}`;
  },
  components: { ChipRow, ProjectDescription, ProjectDemo, ButtonRow },
  data() {
    return {
      currentSection,
      projectKey: this.$route.params.projectKey
    };
  },
  computed: {
    project() {
      return {
        //combines translations and other content into a single project object.
        ...projects[this.projectKey],
        ...this.$t(`portfolioContent.projects.${this.projectKey}`)
      };
    }
  },
  mounted() {
    this.currentSection.id = "#projects";
  }
};
</script>

<style scoped>
#project-details {
  width: 100%;
  min-height: calc(100vh - 100px);
  padding: 12rem var(--side-padding) 7rem;
}

/* vuetify container class */
.container {
  padding: 0;
  margin-top: 5rem;
}
</style>