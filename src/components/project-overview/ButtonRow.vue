<template>
  <v-row id="button-row" no-gutters>
    <v-col cols="12" sm="5">
      <v-btn
        :href="visitLink"
        target="_blank"
        :dark="themeState.isItSummer"
        block
        color="var(--accent-color)"
        depressed
      >
        {{ $t("projectOverview.visitButton") }}
        <v-icon :color="launchIconColor" right small>mdi-launch</v-icon>
      </v-btn>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="12" sm="5">
      <v-btn
        :href="codeLink"
        target="_blank"
        outlined
        block
        color="var(--accent-color)"
        depressed
        :disabled="!codeLink"
      >
        {{ codeBtnText }}
        <v-icon v-if="codeLink" color="var(--accent-color)" right small
          >mdi-launch</v-icon
        >
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { themeState } from "@/state-management/styling";
export default {
  name: "ButtonRow",
  props: {
    visitLink: {
      type: String,
      required: true
    },
    codeLink: {
      type: String,
      required: true
    }
  },
  data() {
    return { themeState };
  },
  computed: {
    launchIconColor() {
      return this.themeState.isItSummer
        ? "white"
        : "var(--secondary-text-color)";
    },
    codeBtnText() {
      return this.codeLink
        ? this.$t("projectOverview.viewCodeButton")
        : this.$t("projectOverview.codeNotAvailable");
    }
  }
};
</script>

<style scoped>
#button-row div {
  margin: 0.5rem 0;
}

.v-btn {
  font-weight: bold;
  font-size: 1.3rem !important;
}

.theme--light.v-btn.v-btn--disabled {
  color: grey !important;
}
.theme--light.v-btn.v-btn--disabled .v-icon,
.theme--light.v-btn.v-btn--disabled .v-btn__loading {
  color: grey !important;
}
</style>