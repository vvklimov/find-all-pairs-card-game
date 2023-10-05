import { defaultSettings } from "./data.js";
import { SidebarSetup } from "./navbars/sidebarSetup.js";
import { getStorageItem, setStorageItem } from "./utils.js";

const editSettings = (settingsName, id, subtagClass) => {
  let settings = getStorageItem(settingsName);
  // contvertion str to object
  settings = JSON.parse(settings);
  if (settings.hasOwnProperty(id)) {
    if (id !== "other") {
      settings[id] = subtagClass;
    } else {
      // toggling value of other settings
      if (settings[id]) {
        settings[id][subtagClass] = !settings[id][subtagClass];
      }
    }
    setStorageItem(settingsName, settings);
  }
  return settings;
  //
};

const setupSettings = (settingsName) => {
  let settings = getStorageItem(settingsName);
  if (settings.length === 0) {
    if (settingsName === "settings") {
      return setStorageItem("settings", defaultSettings);
    } else if (settingsName === "currentGameSettings") {
      return setStorageItem(
        settingsName,
        JSON.parse(getStorageItem("settings"))
      );
    }
  } else return JSON.parse(settings);
};

const activeSettings = (settingsName) => {
  let settings = getStorageItem(settingsName);
  // convertion str to object
  if (settings.length !== 0) {
    settings = JSON.parse(settings);
    const { difficulty, size, themes, other } = settings;
    // const { "show-rules": showRules, "sound-effects": soundEffects } = other;
    return [difficulty, size, themes, other];
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setupSettings("settings");
  setupSettings("currentGameSettings");
  SidebarSetup();
});

const CompareSizeAndThemeSettings = () => {
  const differ = true;
  const { size: currentGameSize, themes: currentGameTheme } = JSON.parse(
    getStorageItem("currentGameSettings")
  );
  const { size: currentSize, themes: currentTheme } = JSON.parse(
    getStorageItem("settings")
  );
  if (currentGameSize !== currentSize || currentGameTheme !== currentTheme) {
    return differ;
  }
  return !differ;
};

export {
  editSettings,
  setupSettings,
  activeSettings,
  CompareSizeAndThemeSettings,
};
