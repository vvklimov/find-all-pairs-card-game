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
    });
  });
}

// setStorageItem("settings", defaultSettings);

export { displayRadioBtns };
