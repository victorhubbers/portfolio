<template>
  <footer>
    <p class="left">@victorhubbers</p>
    <p v-if="$vuetify.breakpoint.mdAndUp" class="center">
      {{ $t(`${middleText}`) }}
    </p>
    <p class="right">
      <span :class="[isEnglish ? 'bold' : '']" @click="setEnglish">EN</span>
      |
      <span :class="[!isEnglish ? 'bold' : '']" @click="setDutch">NL</span>
    </p>
  </footer>
</template>

<script>
import { themeState } from "@/state-management/styling";
export default {
  name: "Footer",
  data() {
    return {
      themeState
    };
  },
  computed: {
    middleText() {
      return this.themeState.isItSummer
        ? "footer.summerText"
        : "footer.winterText";
    },
    isEnglish() {
      return this.$i18n.locale === "en";
    }
  },
  methods: {
    setEnglish() {
      this.$i18n.locale = "en";
    },
    setDutch() {
      this.$i18n.locale = "nl";
    }
  }
};
</script>

<style scoped>
footer {
  height: 100px;
  width: 100%;
  padding: 0 var(--side-padding);
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--secondary-text-color);
}

p.left {
  text-align: left;
}

p.center {
  text-align: center;
  white-space: pre-line;
}

p.right {
  text-align: right;
}

span {
  cursor: pointer;
}

span.bold {
  font-weight: bold;
}
</style>