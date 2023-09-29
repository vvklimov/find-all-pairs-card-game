import { getElement, getStorageItem } from "../utils.js";
import { decks, gameStates } from "../data.js";
import { IndexSelection } from "./randomizer.js";
import { gameFSM } from "./gameFSM.js";
import { getRandomImages } from "./APIs/fetchRandomImage.js";
import { getRandomPeople } from "./APIs/fetchRandomPerson.js";
import { addGameLogic } from "./logic.js";
import { SetupOddEvenRowClass, SnakeLikeArrival } from "./deckTranslation.js";
import { timersSetup, getTargetTimeValuesName } from "./timers/timersSetup.js";

const deckContainer = getElement(".deck-container");
const loading = getElement(".page-loading");
let displayDeckExecuting = false;
let currentSize;

//////////////////////////////
// export const currentSize = 16;

function deckSetup(currentSize, currentTheme) {
  deckContainer.innerHTML = decks
    .map((deck) => {
      // destructuring array
      const { deckName, deckImg, cardsSrc } = deck;
      if (currentTheme === deckName) {
        let selectedCards = IndexSelection(currentSize, cardsSrc.length);
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

function SetWidthToCards(currentSize) {
  const singleCard = [...document.querySelectorAll(".single-card-container")];
  const singleCardWrapper = [
    ...document.querySelectorAll(".single-card-wrapper"),
  ];
  setupGrid(currentSize);
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

// window.addEventListener("DOMContentLoaded", SetWidthToCards());
window.addEventListener("resize", () => {
  SetWidthToCards(currentSize);
});

function setupGrid(currentSize) {
  RemoveGrid();
  if (currentSize === 36) {
    if (window.innerWidth > 600 && window.innerWidth <= 1000) {
      deckContainer.classList.add("grid-6columns");
    } else if (window.innerWidth > 1000) {
      deckContainer.classList.add("grid-9columns");
    } else {
      deckContainer.classList.add("grid-4columns");
    }
    deckContainer.style.maxWidth = `${(deckContainer.clientHeight * 16) / 9}px`;
  } else if (currentSize === 16) {
    deckContainer.classList.add("grid-4columns");
    deckContainer.style.maxWidth = `${deckContainer.clientHeight}px`;
  } else if (currentSize === 20) {
    deckContainer.style.maxWidth = `${deckContainer.clientHeight}px`;
    if (window.innerWidth > 600) {
      deckContainer.classList.add("grid-5columns");
    } else {
      deckContainer.classList.add("grid-4columns");
    }
  } else if (currentSize === 24) {
    deckContainer.style.maxWidth = `${(deckContainer.clientHeight * 8) / 7}px`;
    if (window.innerWidth > 700) {
      deckContainer.classList.add("grid-6columns");
    } else {
      deckContainer.classList.add("grid-4columns");
    }
  }
  const currentGameState = JSON.parse(getStorageItem("currentGameState"));
  //  setup odd/even-row class
  if (currentGameState === gameStates.idle) {
    const cards = [...document.querySelectorAll(".single-card-container")];
    const deckContainerClassList = [...deckContainer.classList];
    const currentLayout = deckContainerClassList.find((grid) => {
      return grid.startsWith("grid-");
    });
    let numberOfColumns = parseInt(currentLayout.slice(5, 6));
    SetupOddEvenRowClass(numberOfColumns, cards);
  } else return;
}

window.addEventListener("load", function () {
  gameFSM(gameStates.idle);
  loading.style.display = "none";
});
const displayDeck = async () => {
  displayDeckExecuting = true;
  const { themes: currentTheme, size } = JSON.parse(getStorageItem("settings"));
  currentSize = Number(size.slice(0, 2));
  timersSetup(getTargetTimeValuesName());
  gameFSM(gameStates.idle);
  if (currentTheme === "surprise-me") {
    await getRandomImages();
  } else if (currentTheme === "people") {
    await getRandomPeople();
  }
  deckSetup(currentSize, currentTheme);
  SetWidthToCards(currentSize);
  await SnakeLikeArrival();
  addGameLogic();
  displayDeckExecuting = false;
};
window.addEventListener("DOMContentLoaded", displayDeck);
// displayDeck();

function RemoveGrid() {
  if (deckContainer.classList.contains("grid-4columns")) {
    deckContainer.classList.remove("grid-4columns");
  }
  if (deckContainer.classList.contains("grid-5columns")) {
    deckContainer.classList.remove("grid-5columns");
  }
  if (deckContainer.classList.contains("grid-6columns")) {
    deckContainer.classList.remove("grid-6columns");
  }
  if (deckContainer.classList.contains("grid-9columns")) {
    deckContainer.classList.remove("grid-9columns");
  }
}

export { currentSize, displayDeck, deckContainer, displayDeckExecuting };
