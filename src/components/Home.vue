<template>
  <section id="home">
    <div id="background-img" />
    <div id="content">
      <div style="width: fit-content">
        <p class="left">Hey, I'm Victor and I'm a</p>
        <h1 class="center">Software Developer</h1>
        <p class="right">welcome to my portfolio.</p>
      </div>

      <ScrollArrow />
    </div>
  </section>
</template>

<script>
import ScrollArrow from "@/components/ScrollArrow";

export default {
  name: "Home",
  components: { ScrollArrow }
};
</script>

<style scoped>
#home {
  background: linear-gradient(
    180deg,
    rgba(15, 8, 75, 0.14) 26.56%,
    rgba(15, 8, 75, 0) 64.06%
  );
}
#background-img {
  width: 100%;
  min-height: 100vh;
  left: 0px;
  top: 0px;

  background-size: cover;
  background-color: #022b3a;
  background-image: url(../assets/mountains-big.jpg);
  background-blend-mode: lighten;
  opacity: 0.5;
}

#content {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  left: 0px;
  top: 0px;
  padding: 30vh 9vw 5vh 9vw;
}

p {
  font-weight: 600;
  font-size: 1.8rem;
}

p.left {
  color: #ffffff;
  text-align: left;
}

h1.center {
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 5rem;
}

p.right {
  color: #ffffff;
  text-align: right;
}
</style>