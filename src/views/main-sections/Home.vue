<template>
  <section id="home">
    <div id="background-img" />
    <div id="headline">
      <div style="width: fit-content">
        <p class="left">Hey, I'm Victor and I'm a</p>
        <h1 class="center">Software Developer</h1>
        <p class="right">welcome to my portfolio.</p>
      </div>
    </div>
    <ScrollArrow />
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
  background: var(--hero-gradient);
}
#background-img {
  width: 100%;
  min-height: 100vh;
  left: 0px;
  top: 0px;

  background-size: cover;
  background-color: var(--primary-color);
  background-image: var(--background-url);
  background-blend-mode: var(--background-blend-mode);
  opacity: 0.5;
}

#headline {
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
  color: var(--primary-text-color);
  text-align: left;
}

h1.center {
  color: var(--primary-text-color);
  text-align: center;
  font-weight: 700;
  font-size: 5rem;
}

p.right {
  color: var(--primary-text-color);
  text-align: right;
}
</style>