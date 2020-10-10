<template>
  <div id="navbar" v-click-outside="closeMenu">
    <header :class="[sticky || showMenu ? 'sticky' : '']">
      <router-link :to="{ name: `Main` }" class="name"
        >Victor Hubbers</router-link
      >

      <nav v-if="$vuetify.breakpoint.lgAndUp" id="nav-content-extended">
        <ul>
          <li v-for="section in sections" :key="section.id">
            <router-link
              :to="{ name: `Main`, hash: section.id }"
              :class="activeClass(section.id)"
              >{{ section.title }}</router-link
            >
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
              v-for="section in sections"
              :key="section.id"
              :class="activeClass(section.id)"
              @click="showMenu = false"
            >
              <router-link :to="{ name: `Main`, hash: section.id }">{{
                section.title
              }}</router-link>
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
import { currentSection } from "@/state-management/observer.js";

export default {
  name: "Navbar",
  components: {
    ThemeToggle,
    HamburgerIcon
  },
  data() {
    return {
      currentSection,
      sticky: false,
      showMenu: false
    };
  },
  computed: {
    activeClass() {
      return id => (this.currentSection.id === id ? "active" : "");
    },
    sections() {
      return [
        { id: "#home", title: this.$t("sectionTitles.home") },
        { id: "#projects", title: this.$t("sectionTitles.projects") },
        { id: "#about", title: this.$t("sectionTitles.about") },
        { id: "#skills", title: this.$t("sectionTitles.skills") },
        { id: "#contact", title: this.$t("sectionTitles.contact") }
      ];
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
  padding: 2.5rem var(--side-padding);
  z-index: 10;
}

#nav-content-extended {
  display: flex;
}

header.sticky {
  padding: 2rem var(--side-padding);
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
  padding: 0.1rem var(--side-padding);
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