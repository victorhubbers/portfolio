<template>
  <section id="about">
    <h2 class="section-title secondary">{{ $t("sectionTitles.about") }}</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7" lg="8">
          <p>{{ $t("portfolioContent.aboutText") }}</p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col v-if="$vuetify.breakpoint.smAndDown" cols="2" sm="3"></v-col>
        <v-col cols="8" sm="6" md="4" lg="3" xl="3">
          <v-img v-show="imageFormat" :src="imageSrc"></v-img>
          <img v-show="!imageFormat" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 311 311'%3E%3C/svg%3E">
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { themeState } from "@/state-management/styling";
import { hasWebp } from "@/portfolio-content";

export default {
  name: "About",
  data() {
    return {
      imageFormat: "",
    };
  },
  computed: {
    imageSrc() {
      if (!this.imageFormat) return "";
      else
        return themeState.isItSummer
          ? require(`../../assets/s-picture${this.imageFormat}`)
          : require(`../../assets/w-picture${this.imageFormat}`);
    },
  },
  async created() {
    this.imageFormat = (await hasWebp()) ? ".webp" : ".png";
  },
};
</script>

<style scoped>
#about {
  width: 100%;
  padding: 7rem var(--side-padding) 5rem;
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