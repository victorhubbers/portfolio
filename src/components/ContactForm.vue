<template>
  <form method="post" @submit.prevent="submitForm">
    <v-row>
      <v-col cols="12" sm="6">
        <label>{{ $t("contactForm.labels.name") }}</label>
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
        <label
          >{{ $t("contactForm.labels.email") }}
          <span>{{ $t("contactForm.labels.optional") }}</span></label
        >
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
        <label>{{ $t("contactForm.labels.message") }}</label>
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
      <v-col cols="12" sm="3">
        <v-btn
          type="submit"
          block
          :dark="themeState.isItSummer"
          color="var(--accent-color)"
          depressed
          >{{ $t("contactForm.submit.submitButton") }}</v-btn
        >
      </v-col>
      <v-col cols="12" sm="9">
        <div style="display: flex; align-items: center;">
          <v-icon :color="submission.color" large>{{ submission.icon }}</v-icon>
          <p
            :style="{
              color: submission.color,
              fontSize: 1.3 + 'rem',
              fontWeight: 500,
              marginLeft: 1 + 'rem'
            }"
          >
            {{ $t(`${submission.text}`) }}
          </p>
        </div>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import { themeState } from "@/state-management/styling";
export default {
  name: "ContactForm",
  data() {
    return {
      themeState,
      form: {
        name: "",
        email: "",
        message: ""
      },
      submission: { icon: "", color: "", text: "" },
      wrongFields: ""
    };
  },
  methods: {
    validateForm() {
      if (this.form.name && this.form.message) {
        return true;
      } else {
        if (!this.form.name && !this.form.message) {
          this.submission.text = "contactForm.submit.nameAndMessageError";
        } else if (!this.form.name) {
          this.submission.text = "contactForm.submit.nameError";
        } else {
          this.submission.text = "contactForm.submit.messageError";
        }
        return false;
      }
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    submitForm() {
      if (!this.validateForm()) {
        this.submission.icon = "mdi-alert-circle";
        this.submission.color = "#FF4444";
        //this.submission.text was set during validateForm()
      } else {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": "portfolio-contact-form",
            ...this.form
          })
        })
          .then(() => {
            this.submission = {
              icon: "mdi-check-circle",
              color: "#00C851",
              text: "contactForm.submit.thanks"
            };

            this.form = {
              name: "",
              email: "",
              message: ""
            };
          })
          .catch(() => {
            this.submission = {
              icon: "mdi-alert-circle",
              color: "#FF4444",
              text: "contactForm.submit.submissionError"
            };
          });
      }
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