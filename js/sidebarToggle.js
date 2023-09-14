import { getElement } from "./utils.js";
import { displayRadioBtns } from "./radioButtons.js";
import { gameStates } from "./data.js";
import { gameFSM } from "./gameFSM.js";
const closeBtn = getElement(".close-btn");
const sidebar = getElement(".sidebar-wrapper");
const toggleBtn = getElement(".toggle-btn");

closeBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  }
  gameFSM(gameStates.resume);
});

toggleBtn.addEventListener("click", () => {
  if (!sidebar.classList.contains("show")) {
    sidebar.classList.add("show");
    const settingsBtn = [...sidebar.querySelectorAll(".settings-btn")];
    displayRadioBtns(settingsBtn);
    gameFSM(gameStates.pause);
  }
});

// closes sidebar if resolution is matched
const maxWidth = window.matchMedia("(min-width: 925px)");
maxWidth.addEventListener("change", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  }
});
