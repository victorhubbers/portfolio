<template>
  <section id="home">
    <div id="background-img" />
    <div id="headline">
      <p class="left">{{ $t(`greeting.left`) }}</p>
      <h1 class="center">{{ $t(`greeting.center`) }}</h1>
      <p class="right">{{ $t(`greeting.right`) }}</p>
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
  max-width: 100%;
  width: fit-content;
  min-height: 100vh;
  left: 0px;
  top: 0px;
  padding: 30vh var(--side-padding) 5vh;
}

p {
  font-weight: 600;
  font-size: 1.8rem;
  color: var(--primary-text-color);
}

p.left {
  text-align: left;
}

h1.center {
  color: var(--primary-text-color);
  text-align: center;
  font-weight: 700;
  font-size: 5rem;
}

p.right {
  text-align: right;
}
</style>