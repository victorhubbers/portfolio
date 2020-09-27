<template>
  <section id="about">
    <h2 class="section-title secondary">About</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7" lg="8">
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil
            <br />
            <br />

            and pain. These cases are perfectly simple and easy to distinguish.
            In a free hour, when our power of choice is untrammelled and when
            nothing prevents our being able to do what we like best, every
            pleasure is to be welcomed and every pain avoided.
          </p>
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
        ? require("../../assets/s-picture.png")
        : require("../../assets/w-picture.png");
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
}
</style>