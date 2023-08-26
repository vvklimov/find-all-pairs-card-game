import { getElement } from "../utils.js";
const navTags = getElement(".nav-tags");
const tagBtns = [...document.querySelectorAll(".nav-btn")];
if (navTags) {
  // console.log("hello there");
}
navTags.addEventListener("mouseover", (e) => {
  e.target.classList.add("gradient-hover-effect");
});
// console.log(tagBtns);
