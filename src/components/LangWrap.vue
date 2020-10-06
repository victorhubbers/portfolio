<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "LangWrap",
  computed: {
    locale() {
      return this.$i18n.locale;
    }
  },
  watch: {
    locale() {
      this.$router.replace({ params: { lang: this.locale } }).catch(() => {});
    }
  }
};
</script>

<style scoped>
</style>