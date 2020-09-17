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
}

#app {
  font-family: "Montserrat", sans-serif;
  background: #022b3a;
  min-height: 200vh;
  box-sizing: border-box;
}
</style>
