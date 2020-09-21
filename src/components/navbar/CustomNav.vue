<template>
  <div id="navbar" v-click-outside="closeMenu">
    <header :class="[sticky || showMenu ? 'sticky' : '']">
      <a href="#home" class="name">Victor Hubbers</a>

      <nav v-if="$vuetify.breakpoint.lgAndUp" id="nav-content-extended">
        <ul>
          <li v-for="link in links" :key="link.ref">
            <a :href="link.ref" :class="activeClass(link.ref)">{{
              link.text
            }}</a>
          </li>
        </ul>
        <ThemeToggle style="margin-left: 4rem;" />
      </nav>

      <HamburgerIcon v-else :open="showMenu" @click.native="toggleMenu" />
    </header>

    <v-row
      v-if="showMenu && !$vuetify.breakpoint.lgAndUp"
      id="hamburger-menu"
      no-gutters
      class="sticky"
    >
      <v-col>
        <nav>
          <ul>
            <li
              v-for="link in links"
              :key="link.ref"
              :class="activeClass(link.ref)"
              @click="showMenu = false"
            >
              <a :href="link.ref">{{ link.text }}</a>
            </li>
          </ul>
        </nav>
      </v-col>
      <v-col>
        <ThemeToggle style="justify-content: flex-end" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ThemeToggle from "@/components/navbar/ThemeToggle.vue";
import HamburgerIcon from "@/components/navbar/HamburgerIcon.vue";
import { currentSection } from "@/utils/observer.js";

export default {
  name: "CustomNav",
  components: {
    ThemeToggle,
    HamburgerIcon
  },
  data() {
    return {
      currentSection,
      sticky: false,
      showMenu: false,
      links: [
        { ref: "#home", text: "Home" },
        { ref: "#projects", text: "Projects" },
        { ref: "#about", text: "About" },
        { ref: "#skills", text: "Skills" },
        { ref: "#contact", text: "Contact" }
      ]
    };
  },
  computed: {
    activeClass() {
      return ref => (this.currentSection.id === ref ? "active" : "");
    }
  },
  created() {
    window.addEventListener("scroll", this.registerScrollY);
  },
  destroyed() {
    window.removeEventListener("scroll", this.registerScrollY);
  },
  methods: {
    registerScrollY() {
      this.sticky = window.scrollY > 0;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    }
  }
};
</script>

<style scoped>
#navbar {
  z-index: 100;
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
  background: var(--primary-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.name {
  position: relative;
  font-weight: 400;
  color: var(--primary-text-color);
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
  color: var(--primary-text-color);
  font-weight: 400;
  font-size: 2rem;
  transition: 0.4s;
}
#nav-content-extended a.active {
  padding-bottom: 5px;
  border-bottom: 3px solid var(--accent-color);
}

#hamburger-menu {
  padding: 0.1rem 9vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#hamburger-menu.sticky {
  padding: 0.1rem 9vw;
  background: var(--primary-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#hamburger-menu li {
  margin-bottom: 1rem;
  list-style: none;
}

#hamburger-menu li.active {
  background: var(--mobile-listdot-url) no-repeat 0px 7px;
  list-style-type: none;
  padding: 0px 0px 1px 24px;
  transition: 0.6s;
}

#hamburger-menu li a {
  text-decoration: none;
  color: var(--primary-text-color);
  font-weight: 400;
  font-size: 1.8rem;
}
</style>