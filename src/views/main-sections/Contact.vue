<template>
  <section id="contact">
    <h2 class="section-title">Contact</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" sm="6">
              <h4>Your name</h4>
              <v-text-field
                filled
                hide-details
                background-color="var(--primary-tint)"
                class="text-field"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <h4>Your email <span>(optional)</span></h4>
              <v-text-field
                filled
                hide-details
                background-color="var(--primary-tint)"
                class="text-field"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <h4>Your message to me</h4>
              <v-textarea
                filled
                hide-details
                background-color="var(--primary-tint)"
                class="text-field"
              ></v-textarea>
            </v-col>
            <v-col cols="12" sm="2">
              <v-btn
                block
                :dark="themeState.isItSummer"
                color="var(--accent-color)"
                depressed
                >Submit</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <Lightbulb :height="75" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { themeState } from "@/styling";
import Lightbulb from "@/components/Lightbulb";
export default {
  name: "Contact",
  components: {
    Lightbulb
  },
  data() {
    return {
      themeState
    };
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

h4 {
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 3rem;
  color: var(--primary-text-color);
}

h4 span {
  font-size: 1.2rem;
}

.text-field {
  color: var(--accent-color) !important;
}

.text-field >>> .v-text-field__slot input,
.text-field >>> .v-text-field__slot textarea {
  color: var(--primary-text-color);
}

.v-btn {
  font-weight: bold;
  font-size: 1.3rem !important;
}
</style>