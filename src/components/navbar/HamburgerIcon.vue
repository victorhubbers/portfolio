<template>
  <button class="menu-toggle" :class="open ? 'open' : ''"></button>
</template>

<script>
export default {
  name: "HamburgerIcon",
  props: {
    open: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style scoped>
.menu-toggle {
  position: relative;
  display: block;
  width: 26px;
  height: 18px;
  background: transparent;
  border-top: 3px solid;
  border-bottom: 3px solid;
  color: var(--primary-text-color);
  font-size: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.menu-toggle:before,
.menu-toggle:after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  background: currentColor;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}

button.open {
  border-color: transparent;
}
button.open:before {
  -webkit-transform: translate(-50%, -50%) rotate(45deg);
  transform: translate(-50%, -50%) rotate(45deg);
}
button.open:after {
  -webkit-transform: translate(-50%, -50%) rotate(-45deg);
  transform: translate(-50%, -50%) rotate(-45deg);
}

button {
  border: none;
  cursor: pointer;
  outline: none;
}
</style>