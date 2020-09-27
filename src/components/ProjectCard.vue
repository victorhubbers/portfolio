<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card color="var(--primary-tint)">
        <v-img :src="project.image"></v-img>

        <v-card-title>
          <h3 id="project-title">{{ project.title }}</h3>
        </v-card-title>

        <v-card-text>
          <p id="project-description">
            {{ project.description }}
          </p>
        </v-card-text>

        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#000000">
            <v-btn
              :light="!themeState.isItSummer"
              color="var(--accent-color)"
              depressed
              @click="viewProjectDetails"
              >More info</v-btn
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
    project: {
      type: Object,
      //   required: true,
      default() {
        return {
          image: "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg",
          title: "Project name",
          description: "Creating a quiz application for in class or in pubs!"
        };
      }
    }
  },
  data() {
    return {
      themeState
    };
  },
  methods: {
    viewProjectDetails() {
      this.$router.push("/projects/temp");
    }
  }
};
</script>

<style scoped>
#project-title {
  font-weight: 500;
  font-size: 2.5rem;
  color: var(--primary-text-color);
}

#project-description {
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