import { getElement } from "./utils.js";
import { activeSettings, editSettings, setupSettings } from "./settings.js";

function displayRadioBtns(radioBtns) {
  setupSettings();
  radioBtns.map((radioBtn) => {
    radioBtn.addEventListener("click", (e) => {
      // extracting data-tag data-subtag
      const id = e.currentTarget.dataset.tag;
      const subtagClass = e.currentTarget.dataset.subtag;
      // console.log(`id is ${id}`);
      // console.log(`subTag is ${subtagClass}`);
      editSettings(id, subtagClass);
      // selecting elements with data-tag data-subtag
      const radioBtnsWithTag = [
        ...document.querySelectorAll(`[data-tag="${id}"]`),
      ];
      const radioBtnsWithSubTag = [
        ...document.querySelectorAll(`[data-subtag="${subtagClass}"]`),
      ];

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
    });
  });
}

// setStorageItem("settings", defaultSettings);

export { displayRadioBtns };
