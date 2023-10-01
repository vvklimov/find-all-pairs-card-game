import { getElement, getStorageItem } from "./utils.js";
import { backgrounds } from "./data.js";
import { Timeout } from "./game/deckTranslation.js";

const slider = getElement(".slider-container");
let chooseBackgroundExecuting = false;
// console.log(slider);

const BackgroundsSetup = async () => {
  let distance = 0;
  slider.innerHTML = backgrounds
    .map((bg, index) => {
      let { theme, src } = bg;
      // how far apart backgrounds from each other
      distance = index * 100;
      if (theme === "dark-fantasy") {
        // rolls random bg
        src = src[Math.floor(Math.random() * src.length)];
      }
      return `<div class="slide" data-theme="${theme}" data-slide=${index} style="left:${distance}%;">
            <img
              class="slide-img"
              src="${src}"
              alt="${theme} img"
            /></div>`;
    })
    .join("");
};

const ChooseBackground = async () => {
  const { themes } = JSON.parse(getStorageItem("settings"));
  const backgrounds = document.querySelectorAll(".slide");
  let distance;
  backgrounds.forEach((bg) => {
    if (bg.dataset.theme === themes) {
      distance = bg.dataset.slide;
    }
  });
  backgrounds.forEach((bg) => {
    bg.style.transform = `translateX(-${distance * 100}%)`;
  });
  await Timeout(1000);
};

window.addEventListener("DOMContentLoaded", () => {
  BackgroundsSetup();
  ChooseBackground();
});
export { ChooseBackground };
