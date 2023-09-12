import { defaultSettings } from "./data.js";
import { getStorageItem, setStorageItem } from "./utils.js";

const editSettings = (id, subtagClass) => {
  let settings = getStorageItem("settings");
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
    setStorageItem("settings", settings);
  }

  //
};

const setupSettings = () => {
  let settings = getStorageItem("settings");
  if (settings.length === 0) {
    setStorageItem("settings", defaultSettings);
  }
};

const activeSettings = () => {
  let settings = getStorageItem("settings");
  // convertion str to object
  if (settings.length !== 0) {
    settings = JSON.parse(settings);
    const { difficulty, size, themes, other } = settings;
    // const { "show-rules": showRules, "sound-effects": soundEffects } = other;
    return [difficulty, size, themes, other];
  }
};
export { editSettings, setupSettings, activeSettings };
