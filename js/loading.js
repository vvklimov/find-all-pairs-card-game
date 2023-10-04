import { getElement } from "./utils.js";
import { activeSettings } from "./settings.js";

document.addEventListener("DOMContentLoaded", () => {
  const rules = getElement(".rules");
  const settings = activeSettings("settings");
  let showRules = settings[3]["show-rules"];
  if (showRules) {
    if (!rules.classList.contains("rules-show")) {
      rules.classList.add("rules-show");
    }
  }
});
