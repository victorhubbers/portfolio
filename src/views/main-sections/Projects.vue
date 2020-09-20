<template>
  <section id="projects">
    <h2 class="section-title">Projects</h2>

    <v-container fluid>
      <v-row>
        <v-col v-for="n in 10" :key="n" lg="3" md="4" sm="6" xs="12">
          <ProjectCard />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "Projects",
  components: { ProjectCard }
};
</script>

<style scoped>
#projects {
  width: 100%;
  padding: 7rem 9vw;
}

/* vuetify container class */
.container {
  padding: 0;
  margin-top: 5rem;
}
</style>