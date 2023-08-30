import { defaultSettings } from "./data.js";
import { getStorageItem, setStorageItem } from "./utils.js";

const editSettings = (id, subtagClass) => {
  let settings = getStorageItem("settings");
  // contvertion str to object
  settings = JSON.parse(settings);
  if (settings.hasOwnProperty(id)) {
    settings[id] = subtagClass;
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
    const { difficulty, size, themes } = settings;
    return [difficulty, size, themes];
  }
};
export { editSettings, setupSettings, activeSettings };
