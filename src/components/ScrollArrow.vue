<template>
  <div class="arrow">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "ScrollArrow"
};
</script>

<style scoped>
.arrow {
  position: absolute;
  top: 85vh;
  left: 50%;
  transform: translate(-50%, -50%);
}
.arrow span {
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  border-bottom: 3px solid var(--primary-text-color);
  border-right: 3px solid var(--primary-text-color);
  transform: rotate(45deg);
  margin: -1rem;
  animation: animate 3s infinite;
}
.arrow span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>