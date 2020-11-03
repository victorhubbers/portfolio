import Vue from "vue";

export const currentSection = Vue.observable({
  id: "#home",
});

//I always want to set currentSection to the section that the user is most likely looking at, so it helps to check regularly.
export const threshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

//Updates state to hold the id of the section that the user is most likely looking at.**
export function onIntersect(entries) {
  const windowHeight = this.$vuetify.breakpoint.height; 
  const intersectionHeight = entries[0].intersectionRect.height; //Height that is covered by the intersecting section.

  const onScreenRatio = intersectionHeight / windowHeight; //How much of the viewport is covered by the section.
  const intersectionRatio = entries[0].intersectionRatio; //How much of the element is displayed in the viewport.

  if (onScreenRatio > 0.5 || intersectionRatio === 1) {
    currentSection.id = `#${entries[0].target.id}`;
  }
}

//**NOTE: Normally you would just use the 'interSectionRatio' property, but this does
// not account for very tall elements on a mobile screen, as it will never get a high intersection ratio.
// We need to calculate how much of the viewport is covered by an element, and update if this is more than 50%,
// we also want to update when an element is displayed 100% in the viewport, this accounts for smaller sections on large screens. 

//Viewport is small -> your sections are tall -> meaning the intersectionRatio is low, eventhough the content covers the whole viewport.
//Viewport is big -> your sections are small -> meaning the onScreenRatio is low, eventhough the whole element is displayed in the viewport.