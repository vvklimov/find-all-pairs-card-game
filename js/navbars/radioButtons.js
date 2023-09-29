import { getStorageItem } from "../utils.js";
import { activeSettings, editSettings } from "../settings.js";
import { gameStates } from "../data.js";
import {
  timersSetup,
  getTargetTimeValuesName,
} from "../game/timers/timersSetup.js";
import { StartNewGame } from "./gameMenu.js";
function radioBtnClickHandler(e) {
  // extracting data-tag data-subtag
  const id = e.currentTarget.dataset.tag;
  const subtagClass = e.currentTarget.dataset.subtag;
  // console.log(`id is ${id}`);
  // console.log(`subTag is ${subtagClass}`);
  // JSON.stringify because we cannot compare arrays, but we can compare strings
  //Object.values(object) to get values of an object
  // next few lines are for handling case if user clicks already active button
  const previousSettings = JSON.stringify(activeSettings());
  const currentSettingsObj = editSettings(id, subtagClass);
  const currentSettings = JSON.stringify(Object.values(currentSettingsObj));
  if (previousSettings === currentSettings) {
    return;
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
      if (id === "size" || id === "themes") {
        StartNewGame();
      } else if (id === "difficulty") {
        timersSetup(getTargetTimeValuesName());
        ////////////////////
        // to do sound effects
        //////////////////////
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

export { addEventListenersToRadioBtns, removeEventListenersFromRadioBtns };
