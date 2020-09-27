<template>
  <footer>
    <p class="left">@victorhubbers</p>
    <p v-if="$vuetify.breakpoint.mdAndUp" class="center">
      {{ middleText }}
    </p>
    <p class="right">
      <span :class="[language.isEnglish ? 'bold' : '']" @click="setEnglish"
        >EN</span
      >
      |
      <span :class="[!language.isEnglish ? 'bold' : '']" @click="setDutch"
        >NL</span
      >
    </p>
  </footer>
</template>

<script>
import { themeState } from "@/state-management/styling";
export default {
  name: "Footer",
  data() {
    return {
      themeState,
      language: {
        isEnglish: true
      }
    };
  },
  computed: {
    middleText() {
      return this.themeState.isItSummer
        ? `Want to cool down? \n Flip the switch at the top right of your screen!`
        : `Rather feel some summer vibes? \n Flip the switch at the top right of your screen!`;
    }
  },
  methods: {
    setEnglish() {},
    setDutch() {}
  }
};
</script>

<style scoped>
footer {
  height: 100px;
  width: 100%;
  padding: 0 9vw;
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