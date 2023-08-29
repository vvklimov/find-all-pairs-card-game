import { getElement } from "./utils.js";

function displayRadioBtns(radioBtns) {
  // radioBtns.map((btn) => {
  //   const btnDOM = btn.childNodes[1].childNodes[1];
  //   if (btnDOM.classList.contains("checked")) {
  //     btnDOM.classList.remove("checked");
  //   }
  // });
  radioBtns.map((radioBtn) => {
    radioBtn.addEventListener("click", (e) => {
      // extracting data-tag data-subtag
      const id = e.currentTarget.dataset.tag;
      const subTag = e.currentTarget.dataset.subtag;
      // selecting elements with data-tag data-subtag
      const radioBtnsWithTag = [
        ...document.querySelectorAll(`[data-tag="${id}"]`),
      ];
      const radioBtnsWithSubTag = [
        ...document.querySelectorAll(`[data-subtag="${subTag}"]`),
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

export { displayRadioBtns };
