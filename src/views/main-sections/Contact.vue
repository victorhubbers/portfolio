<template>
  <section id="contact">
    <h2 class="section-title">Contact</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8">
          <!-- clearable? -->
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                filled
                hide-details
                background-color="var(--primary-tint)"
                class="text-field"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                filled
                hide-details
                background-color="var(--primary-tint)"
                class="text-field"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                filled
                hide-details
                background-color="var(--primary-tint)"
                class="text-field"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-col>
        <!-- <v-spacer></v-spacer> -->
        <!-- <v-col v-if="$vuetify.breakpoint.smAndDown" cols="2" sm="3"></v-col> -->
        <v-col cols="12" md="4">
          <!-- icon + text -->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
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

p {
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.6rem;

  color: var(--secondary-text-color);
}

.text-field {
  color: var(--accent-color) !important;
}

.text-field >>> .v-text-field__slot input,
.text-field >>> .v-text-field__slot textarea {
  color: var(--primary-text-color);
}
</style>