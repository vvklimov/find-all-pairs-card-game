import { PlaySound, getElement, getStorageItem } from "../utils.js";
import {
  activeSettings,
  editSettings,
  CompareSizeAndThemeSettings,
} from "../settings.js";
import { gameStates } from "../data.js";
import {
  timersSetup,
  getTargetTimeValuesName,
} from "../game/timers/timersSetup.js";
import { AppendApplyBtn } from "./navbarSetup.js";
import { StartNewGame, displayGameMenu } from "./gameMenu.js";
import { SidebarNewGameBtnTextContent } from "./sidebarToggle.js";
import { CardsVanishing } from "../game/logic.js";
function radioBtnClickHandler(e) {
  // extracting data-tag data-subtag
  const id = e.currentTarget.dataset.tag;
  const subtagClass = e.currentTarget.dataset.subtag;
  // console.log(`id is ${id}`);
  // console.log(`subTag is ${subtagClass}`);
  // JSON.stringify because we cannot compare arrays, but we can compare strings
  //Object.values(object) to get values of an object
  // next few lines are for handling case if user clicks already active button
  const previousSettings = JSON.stringify(activeSettings("settings"));
  const currentSettingsObj = editSettings("settings", id, subtagClass);
  const currentSettings = JSON.stringify(Object.values(currentSettingsObj));
  if (previousSettings === currentSettings) {
    return;
  }
  PlaySound("./assets/sounds/radioBtnClick.mp3", false);
  // comparing currentGameSettings and settings, we care about size and themes
  if (id === "size" || id === "themes") {
    SidebarNewGameBtnTextContent();
    const submenu = getElement(".submenu");
    if (CompareSizeAndThemeSettings()) {
      AppendApplyBtn(submenu);
    } else {
      let btnExists = AppendApplyBtn(submenu);
      if (btnExists) {
        RemoveApplyBtn(submenu);
      }
    }
  } else if (id === "other") {
    editSettings("currentGameSettings", id, subtagClass);
  }

  // selecting elements with data-tag data-subtag
  const radioBtnsWithTag = [...document.querySelectorAll(`[data-tag="${id}"]`)];
  const radioBtnsWithSubTag = [
    ...document.querySelectorAll(`[data-subtag="${subtagClass}"]`),
  ];
  // console.log(radioBtnsWithTag);
  // console.log(radioBtnWithSubTag);
  if (id !== "other") {
    radioBtnsWithTag.forEach((btn) => {
      const btnDOM = btn.childNodes[1].childNodes[1];
      if (btnDOM.classList.contains("checked")) {
        btnDOM.classList.remove("checked");
      }
    });
    radioBtnsWithSubTag.forEach((btn) => {
      const btnDOM = btn.childNodes[1].childNodes[1];
      if (!btnDOM.classList.contains("checked")) {
        btnDOM.classList.add("checked");
      }
    });
  } else {
    // SOMEBODY EXPLAIN ME WHY NEXT 2 LINES REQUIRE RE-HOVERING TO DISPLAY CHANGES, BUT WITH forEach IT WORKS AS IT SHOULD
    // const btnDOM = radioBtnsWithSubTag[0].childNodes[1].childNodes[1];
    // btnDOM.classList.toggle("checked");
    radioBtnsWithSubTag.forEach((btn) => {
      const btnDOM = btn.childNodes[1].childNodes[1];
      btnDOM.classList.toggle("checked");
    });
  }
  let currentGameState = getStorageItem("currentGameState");
  if (currentGameState) {
    currentGameState = JSON.parse(currentGameState);
    if (currentGameState === gameStates.idle) {
      if (id === "difficulty") {
        editSettings("currentGameSettings", id, subtagClass);
        timersSetup(getTargetTimeValuesName());
        ////////////////////
        // to do sound effects
        //////////////////////
      }
    } else if (currentGameState !== gameStates.idle) {
      if (id === "other" && subtagClass === "hide-found-cards") {
        CardsVanishing();
      }
    }
  }
}
// add event listeners to radio buttons
function addEventListenersToRadioBtns(radioBtns) {
  radioBtns.forEach((radioBtn) => {
    radioBtn.addEventListener("click", radioBtnClickHandler);
  });
}

// remove event listeners from radio buttons
function removeEventListenersFromRadioBtns(radioBtns) {
  radioBtns.forEach((radioBtn) => {
    radioBtn.removeEventListener("click", radioBtnClickHandler);
  });
}

// setStorageItem("settings", defaultSettings);
function RemoveApplyBtn(submenu) {
  const applyChangesBtn = submenu.querySelector(".apply-changes-btn");
  submenu.removeChild(applyChangesBtn);
}

function addEventListenerToApplyChangesBtn(submenu) {
  const applyChangesBtn = submenu.querySelector(".apply-changes-btn");
  applyChangesBtn.addEventListener("click", () => {
    PlaySound("./assets/sounds/btnClick.mp3", false);
    displayGameMenu();
  });
}
export {
  addEventListenersToRadioBtns,
  removeEventListenersFromRadioBtns,
  addEventListenerToApplyChangesBtn,
};
