<template>
  <div id="app">
    <CustomNav />
    <router-view />
  </div>
</template>

<script>
import CustomNav from "@/components/CustomNav";

export default {
  name: "App",

  components: {
    CustomNav
  },

  data: () => ({
    //
  })
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* 1 rem = 10px */
:root {
  font-size: 10px;
  scroll-behavior: smooth;
}

#app {
  font-family: "Montserrat", sans-serif;
  background: #022b3a;
  box-sizing: border-box;
}
</style>
