<template>
  <div id="navbar">
    <header :class="[ sticky ? 'sticky' : '']">
      <a href="#" class="name">Victor Hubbers</a>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  data() {
      return {
          sticky: false
      }
  },
  mounted() {
    console.log(this.$vuetify);
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.sticky = window.scrollY > 0;
    }
  }
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;
  padding: 20px 9vw;
  z-index: 10;
}

header.sticky {
    padding: 5px 9vw;
    background: #022B3A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

header .name {
  position: relative;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  letter-spacing: 2px;
  transition: 0.4s;
}

ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  position: relative;
  list-style: none;
}

a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #ffffff;
  letter-spacing: 2px;
  font-weight: 500;
  transition: 0.4s;
}
</style>