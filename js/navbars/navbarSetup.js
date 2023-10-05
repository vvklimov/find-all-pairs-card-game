import {
  getElement,
  setCheckedState,
  getStorageItem,
  PlaySound,
} from "../utils.js";
import { navTags, gameStates } from "../data.js";
import {
  addEventListenersToRadioBtns,
  removeEventListenersFromRadioBtns,
  addEventListenerToApplyChangesBtn,
} from "./radioButtons.js";
import { gameFSM } from "../game/gameFSM.js";
import { CompareSizeAndThemeSettings } from "../settings.js";

const nav = getElement(".nav");
const hero = getElement(".hero");
const tagBtns = [...document.querySelectorAll(".nav-btn")];
const settingsSubmenu = getElement(".submenu");
// navbar setup
tagBtns.forEach((btn) => {
  btn.addEventListener("mouseover", (e) => {
    gameFSM(gameStates.pause);
    if (e.target.classList.contains("nav-btn")) {
      PlaySound("./assets/sounds/hoverMenuSound.mp3", false);
      removeGradient();
      hideSettingsSubmenu();
      const text = e.currentTarget.textContent;
      const tempBtn = e.currentTarget.getBoundingClientRect();
      const bottom = tempBtn.bottom - 3;
      const center = (tempBtn.left + tempBtn.right) / 2;
      e.target.classList.add("gradient-hover-effect");
      settingsSubmenu.classList.add("show-submenu");
      settingsSubmenu.style.left = `${center}px`;
      settingsSubmenu.style.top = `${bottom}px`;
      settingsSubmenu.innerHTML = navTags
        .map((setting) => {
          const { tag, subtags } = setting;
          if (tag === text)
            return subtags
              .map((subtag) => {
                const { subtagName, subtagClass, checked } = setCheckedState(
                  tag,
                  subtag
                );

                return `<div class="single-setting">
        <button class="settings-btn checkbox-btn" data-tag="${tag}" data-subtag="${subtagClass}">
          <div class="checkbox-btn-middle-part">
            <div class="checkbox-btn-middle-part ${checked}"></div>
          </div>
        </button>
        <span>${subtagName}</span>
      </div>`;
              })
              .join("");
        })
        .join("");
      // radio btns functionality
      const radioBtns = [...settingsSubmenu.querySelectorAll(".settings-btn")];
      removeEventListenersFromRadioBtns(radioBtns);
      addEventListenersToRadioBtns(radioBtns);
      if (CompareSizeAndThemeSettings()) {
        AppendApplyBtn(settingsSubmenu);
        addEventListenerToApplyChangesBtn(settingsSubmenu);
      }
    }
  });
});

function removeGradient() {
  tagBtns.forEach((tagBtn) => {
    if (tagBtn.classList.contains("gradient-hover-effect")) {
      tagBtn.classList.remove("gradient-hover-effect");
    }
  });
}
function hideSettingsSubmenu() {
  if (settingsSubmenu.classList.contains("show-submenu")) {
    settingsSubmenu.classList.remove("show-submenu");
  }
}
hero.addEventListener("mouseover", function () {
  removeGradient();
  hideSettingsSubmenu();
  const gameMenu = getElement(".game-menu");
  if (!gameMenu.classList.contains("show")) {
    gameFSM(gameStates.resume);
  }
});
nav.addEventListener("mouseover", function (e) {
  if (
    !e.target.classList.contains("nav-btn") &&
    !settingsSubmenu.classList.contains("settings")
  ) {
    removeGradient();
    hideSettingsSubmenu();
  }
});

function AppendApplyBtn(submenu) {
  if (submenu.classList.contains("show-submenu")) {
    const ApplyBtnExists = submenu.querySelector(".apply-changes-btn");
    if (!ApplyBtnExists) {
      const applyBtn = document.createElement("button");
      applyBtn.classList.add("btn", "apply-changes-btn");
      applyBtn.style.marginTop = "1rem";
      applyBtn.textContent = "apply changes";
      submenu.appendChild(applyBtn);
      addEventListenerToApplyChangesBtn(submenu);
      return false;
    }
    return true;
  }
}

export { AppendApplyBtn };
