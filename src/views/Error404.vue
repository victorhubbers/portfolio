<template>
  <div id="error-page">
    <div id="error-msg">
      <svg
        width="153"
        height="151"
        viewBox="0 0 153 151"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M87.8083 9.88819C88.8941 5.92888 92.9839 3.59942 96.9432 4.6852C100.903 5.77098 103.232 9.86083 102.146 13.8201L77.3342 104.298C76.2484 108.257 72.1586 110.586 68.1992 109.501C64.2399 108.415 61.9105 104.325 62.9963 100.366L87.8083 9.88819Z"
          fill="#FF4444"
        />
        <path
          d="M66.1827 141.932C65.112 145.934 61.0003 148.31 56.9989 147.239C52.9976 146.168 50.6218 142.057 51.6925 138.055C52.7632 134.054 56.8749 131.678 60.8763 132.749C64.8777 133.819 67.2534 137.931 66.1827 141.932Z"
          fill="#FF4444"
        />
      </svg>

      <p>
        {{ $t("404Message") }}
      </p>

      <v-btn
        :dark="themeState.isItSummer"
        color="var(--accent-color)"
        depressed
        to="/"
        >{{ $t("404Action") }}</v-btn
      >
    </div>
  </div>
</template>

<script>
import { currentSection } from "@/state-management/observer";
import { themeState } from "@/state-management/styling";

export default {
  name: "Error404",
  data() {
    return {
      currentSection,
      themeState
    };
  },
  mounted() {
    this.currentSection.id = "";
  }
};
</script>

<style scoped>
#error-page {
  height: calc(100vh - 100px);
  width: 100%;
  background-color: var(--primary-color);
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

#error-msg {
  text-align: center;
  max-width: 400px;
}

#error-msg p {
  font-weight: 400;
  font-size: 2rem;
  color: var(--primary-text-color);
  padding: 2rem 1rem 0 1rem;
  white-space: pre-line;
}

.v-btn {
  margin-top: 25px;
  font-weight: 500;
  font-size: 1.5rem;
}

@keyframes spin {
  0% {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-30deg);
  }
}
svg {
  animation: spin 2s ease-in-out infinite;
}
</style>