import { activeSettings } from "./settings.js";
import { gameStates } from "./data.js";
function getElement(selection) {
  const element = document.querySelector(`${selection}`);
  if (element) return element;
  throw new Error(`Please check ${selection} selector, no such element exists`);
}

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const setCheckedState = (tag, subtag) => {
  const { subtagName, subtagClass } = subtag;
  let checked = "";
  let activeSettingsArray = activeSettings("settings");

  if (activeSettingsArray.includes(subtagClass)) {
    checked = "checked";
  } else if (tag === "other") {
    const { subtagClass } = subtag;
    const subtagValue = activeSettingsArray[3][subtagClass];
    if (subtagValue) {
      checked = "checked";
    }
  }
  return { checked, subtagName, subtagClass };
};

function PlaySound(soundName, loopFlag) {
  let currentGameSettings = getStorageItem("currentGameSettings");
  if (currentGameSettings) {
    currentGameSettings = JSON.parse(currentGameSettings);
    const { other } = currentGameSettings;
    if (other["sound-effects"] === true) {
      let audio = new Audio(soundName);
      audio.loop = loopFlag;
      audio.play();
    } else return;
  }
}
export {
  getElement,
  getStorageItem,
  setStorageItem,
  setCheckedState,
  PlaySound,
};
