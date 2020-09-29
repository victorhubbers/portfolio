<template>
  <section id="contact">
    <h2 class="section-title">{{ $t("sectionTitles.contact") }}</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8">
          <ContactForm />
        </v-col>
        <v-col cols="12" md="4">
          <Lightbulb :height="75" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Lightbulb from "@/components/Lightbulb";
import ContactForm from "@/components/ContactForm";
export default {
  name: "Contact",
  components: {
    Lightbulb,
    ContactForm
  }
};
</script>

<style scoped>
#contact {
  width: 100%;
  padding: 7rem 9vw;
}
/* vuetify container class */
.container {
  padding: 0;
  margin-top: 2rem;
}
</style>