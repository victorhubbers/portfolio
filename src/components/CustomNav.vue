<template>
  <div id="navbar">
    <header :class="[ sticky ? 'sticky' : '']">
      <a href="#" class="name">Victor Hubbers</a>

      <div id="nav-content">
        <ul>
          <li v-for="link in links" :key="link.ref">
            <a :href="link.ref" :class="[ current === link.text ? 'current' : '']">{{link.text}}</a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </header>
  </div>
</template>

<script>
import ThemeToggle from "@/components/ThemeToggle.vue";

export default {
  name: "ThemeNav",
  components: {
    ThemeToggle
  },
  data() {
    return {
      sticky: false,
      current: "Home",
      links: [
        { ref: "#home", text: "Home" },
        { ref: "#projects", text: "Projects" },
        { ref: "#about", text: "About" },
        { ref: "#contact", text: "Contact" }
      ]
    };
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
  padding: 2.5rem 9vw;
  z-index: 10;
}

#nav-content {
  display: flex;
}

header.sticky {
  padding: 2rem 9vw;
  background: #022b3a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.name {
  position: relative;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  font-size: 2.5rem;
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

li a {
  position: relative;
  margin-left: 4rem;
  text-decoration: none;
  color: #ffffff;
  font-weight: 400;
  font-size: 2rem;
  transition: 0.4s;
}

a.current {
  padding-bottom: 5px;
  border-bottom: 3px solid#03FF77;
}
</style>