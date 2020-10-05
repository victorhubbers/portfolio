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
          <v-img :src="imageSrc"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { themeState } from "@/state-management/styling";
export default {
  name: "About",
  computed: {
    imageSrc() {
      return themeState.isItSummer
        ? require("../../assets/s-picture.webp")
        : require("../../assets/w-picture.webp");
    }
  }
};
</script>

<style scoped>
#about {
  width: 100%;
  padding: 7rem 9vw 5rem;
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