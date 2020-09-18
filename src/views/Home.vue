<template>
  <div style="height: 500vh">
    <div id="hero-wrapper">
      <div id="home"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
#hero-wrapper {
  background: linear-gradient(
    180deg,
    rgba(15, 8, 75, 0.14) 26.56%,
    rgba(15, 8, 75, 0) 64.06%
  );
}
#home {
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;

  background-size: cover;
  background-color: #022b3a;
  background-image: url(../assets/mountains-big.jpg);
  background-blend-mode: lighten;
  opacity: 0.5;
}
</style>