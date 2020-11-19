<template>
  <section id="projects">
    <h2 class="section-title">{{ $t("sectionTitles.projects") }}</h2>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(project, projectKey) in $projects"
          :key="projectKey"
          cols="12"
          sm="6"
          md="4"
          xl="3"
        >
          <ProjectCard :project-key="projectKey" :project-image="project.coverImage" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "Projects",
  components: { ProjectCard },
};
</script>

<style scoped>
#projects {
  width: 100%;
  padding: 7rem var(--side-padding);
}

/* vuetify container class */
.container {
  padding: 0;
  margin-top: 2rem;
}
</style>