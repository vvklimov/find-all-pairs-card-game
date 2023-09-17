import { getElement } from "../utils.js";
import {
  addEventListenersToRadioBtns,
  removeEventListenersFromRadioBtns,
} from "./radioButtons.js";
import { gameStates } from "../data.js";
import { gameFSM } from "../game/gameFSM.js";
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
    removeEventListenersFromRadioBtns(settingsBtn);
    addEventListenersToRadioBtns(settingsBtn);
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
