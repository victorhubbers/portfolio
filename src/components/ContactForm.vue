<template>
  <form method="post" @submit.prevent="submitForm">
    <input type="hidden" name="form-name" value="portfolio-contact-form" />
    <v-row>
      <v-col cols="12" sm="6">
        <label>Your name</label>
        <v-text-field
          v-model="form.name"
          type="text"
          filled
          hide-details
          background-color="var(--primary-tint)"
          class="text-field"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <label>Your email <span>(optional)</span></label>
        <v-text-field
          v-model="form.email"
          type="email"
          filled
          hide-details
          background-color="var(--primary-tint)"
          class="text-field"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <label>Your message to me</label>
        <v-textarea
          v-model="form.message"
          type="text"
          filled
          hide-details
          height="200"
          no-resize
          background-color="var(--primary-tint)"
          class="text-field"
        ></v-textarea>
      </v-col>
      <v-col cols="12" sm="2">
        <v-btn
          type="submit"
          block
          :dark="themeState.isItSummer"
          color="var(--accent-color)"
          depressed
          >Submit</v-btn
        >
      </v-col>
    </v-row>
  </form>
</template>

<script>
import { themeState } from "@/styling";
export default {
  name: "ContactForm",
  data() {
    return {
      themeState,
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    submitForm() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "portfolio-contact-form",
          ...this.form
        })
      })
        .then(() => {
          console.log("thanks");
        })
        .catch(() => {
          console.log("error");
        });
    }
  }
};
</script>

<style scoped>
label {
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 3rem;
  color: var(--primary-text-color);
}

label span {
  font-size: 1.2rem;
}

/* change underline of vuetify text field */
.text-field {
  color: var(--accent-color) !important;
}

/* change text color of input & textarea */
.text-field >>> .v-text-field__slot input,
.text-field >>> .v-text-field__slot textarea {
  color: var(--primary-text-color);
}

.v-btn {
  font-weight: bold;
  font-size: 1.3rem !important;
}
</style>