import { getElement, getStorageItem } from "./utils.js";
import { decks } from "./data.js";
import { IndexSelection } from "./randomizer.js";

export const deckContainer = getElement(".deck-container");
// extracting current settings
const settings = JSON.parse(getStorageItem("settings"));
const {
  themes: currentTheme,
  size,
  difficulty: currentDifficulty,
  other,
} = settings;
const loading = getElement(".page-loading");
export const currentSize = Number(size.slice(0, 2));
// export const currentSize = 16;

function deckSetup(currentTheme, numberOfPairs, currentDifficulty) {
  deckContainer.innerHTML = decks
    .map((deck) => {
      // desctructing array
      const { deckName, deckImg, cardsSrc } = deck;
      if (currentTheme === deckName) {
        let selectedCards = IndexSelection(currentSize, cardsSrc.length);
        // console.log(selectedCards);
        // console.log(cardsSrc);
        return selectedCards
          .map((index) => {
            // const { cardSrc: src } = card;
            const { cardSrc: src } = cardsSrc[index];

            return `<div class="single-card-wrapper"><div class="single-card-container">
            <div class="single-card" data-card-id="${index}" data-found="false">
              <div class="single-card-back">
                <img
                  src="${deckImg}"
                  alt="card"
                  class="img card-img"
                />
              </div>
              <div class="single-card-front">
                <img
                  src="${src}"
                  alt="card"
                  class="img card-img"
                />
              </div>
            </div>
          </div></div>`;
          })
          .join("");
      }
    })
    .join("");
}
deckSetup(currentTheme);

const singleCard = [...document.querySelectorAll(".single-card-container")];
const singleCardWrapper = [
  ...document.querySelectorAll(".single-card-wrapper"),
];
function SetWidthToCards() {
  setupGrid6x6and9x4(currentSize);
  const singleCardAspectRatio = 1.557;
  let singleCardWrapperAspectRatio =
    singleCardWrapper[0].clientHeight / singleCardWrapper[0].clientWidth;

  singleCard.forEach((card) => {
    if (singleCardWrapperAspectRatio > singleCardAspectRatio) {
      card.style.width = `100%`;
      card.style.height = `${card.clientWidth * singleCardAspectRatio}px`;
    } else {
      card.style.height = `100%`;
      card.style.width = `${card.clientHeight / singleCardAspectRatio}px`;
    }
  });
}

window.addEventListener("DOMContentLoaded", SetWidthToCards());
window.addEventListener("resize", SetWidthToCards);

function setupGrid6x6and9x4(currentSize) {
  if (currentSize === 36) {
    if (deckContainer.classList.contains("grid-6x6")) {
      deckContainer.classList.remove("grid-6x6");
    }
    if (deckContainer.classList.contains("grid-9x4")) {
      deckContainer.classList.remove("grid-9x4");
    }
    if (window.innerWidth > 600 && window.innerWidth <= 1000) {
      deckContainer.classList.add("grid-6x6");
    } else if (window.innerWidth > 1000) {
      deckContainer.classList.add("grid-9x4");
    }
  }
  if (currentSize === 16) {
    deckContainer.style.maxWidth = `${deckContainer.clientHeight}px`;
  }
}

window.addEventListener("load", function () {
  loading.style.display = "none";
});
