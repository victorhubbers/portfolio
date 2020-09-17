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

#app {
  font-family: "Montserrat", sans-serif;
  background: #022b3a;
  min-height: 200vh;
  box-sizing: border-box;
}
</style>
