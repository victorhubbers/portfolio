import Vue from "vue";

export const currentSection = Vue.observable({
  id: "#home",
});

//I always want to set currentSection to the section that covers most of the viewport, so it helps to update regularly.
export const threshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

//Updates state to hold the id of the section that covers most of the viewport.**
export function onIntersect(entries) {
  const windowHeight = this.$vuetify.breakpoint.height; //Height of current window
  const intersectionHeight = entries[0].intersectionRect.height; //Height that is covered by the intersecting section.

  const onScreenRatio = intersectionHeight / windowHeight;

  if (onScreenRatio > 0.5) {
    currentSection.id = `#${entries[0].target.id}`;
  }
}

//**NOTE: Normally you would use the 'interSectionRatio' property, but this does
// not account for very tall elements on a mobile screen, as it will never get a high intersection ratio.

//Viewport is small -> your sections grow tall -> meaning the intersectionRatio is low, eventhough the content covers the whole viewport.
