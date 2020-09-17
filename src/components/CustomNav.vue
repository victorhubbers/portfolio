<template>
  <div id="navbar">
    <header :class="[ sticky ? 'sticky' : '']">
      <a href="/" class="name">Victor Hubbers</a>

      <nav v-if="$vuetify.breakpoint.lgAndUp" id="nav-content-extended">
        <ul>
          <li v-for="link in links" :key="link.ref">
            <a :href="link.ref" :class="[ current === link.text ? 'current' : '']">{{link.text}}</a>
          </li>
        </ul>
        <ThemeToggle style="margin-left: 4rem;" />
      </nav>

      <HamburgerIcon v-else @toggleMenu="showMenu = $event" />
    </header>

    <div v-if="showMenu" id="hamburger-menu">
      <nav>
        <ul>
          <li
            v-for="link in links"
            :key="link.ref"
            :class="[ current === link.text ? 'current' : '']"
          >
            <a :href="link.ref">{{link.text}}</a>
          </li>
        </ul>
      </nav>
      <ThemeToggle style="margin-bottom: 1rem"/>
    </div>
  </div>
</template>

<script>
import ThemeToggle from "@/components/ThemeToggle.vue";
import HamburgerIcon from "@/components/HamburgerIcon.vue";

export default {
  name: "ThemeNav",
  components: {
    ThemeToggle,
    HamburgerIcon
  },
  data() {
    return {
      sticky: false,
      showMenu: false,
      current: "Home",
      links: [
        { ref: "#home", text: "Home" },
        { ref: "#projects", text: "Projects" },
        { ref: "#about", text: "About" },
        { ref: "#skills", text: "Skills" },
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
#navbar {
  width: 100%;
  position: fixed;
}
header {
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

#nav-content-extended {
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

#nav-content-extended ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav-content-extended li {
  position: relative;
  list-style: none;
}

#nav-content-extended li a {
  position: relative;
  margin-left: 4rem;
  text-decoration: none;
  color: #ffffff;
  font-weight: 400;
  font-size: 2rem;
  transition: 0.4s;
}
/* #nav-content-extended */
a.current {
  padding-bottom: 5px;
  border-bottom: 3px solid#03FF77;
}

#hamburger-menu {
  padding: 0.1rem 9vw;
  background: #022b3a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#hamburger-menu li {
  margin-bottom: 1rem;
  list-style: none;
}

#hamburger-menu li.current {
  background: url("../assets/greendot.svg") no-repeat 0px 7px;
  list-style-type: none;
  padding: 0px 0px 1px 24px;
}

#hamburger-menu li a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 400;
  font-size: 1.8rem;
}
</style>