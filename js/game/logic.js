import "./deckSetup.js";
import { deckContainer, currentSize } from "./deckSetup.js";
import { getElement, getStorageItem } from "../utils.js";
import { gameFSM } from "./gameFSM.js";
import { gameStates } from "../data.js";

let preveiousCardId = false;
let currentCardId = false;
let eventListenerOnPause = false;
// let pairsToWin;
let pairsToWin = 1;

const addGameLogic = () => {
  deckContainer.addEventListener("click", (e) => {
    let currentGameState = getStorageItem("currentGameState");

    currentGameState = JSON.parse(currentGameState);
    if (
      !eventListenerOnPause &&
      currentGameState !== gameStates.gameoverFailure &&
      currentGameState !== gameStates.gameoverSuccess
    ) {
      const singleCard = e.target.parentElement.parentElement;
      const singleCardBackSide = e.target.parentElement;

      if (
        singleCard.classList.contains("single-card") &&
        singleCardBackSide.classList.contains("single-card-back")
      ) {
        gameFSM(gameStates.game);
        singleCard.classList.add("single-card-flip");
        // if we flip first card of pair
        if (!preveiousCardId) {
          preveiousCardId = singleCard.dataset.cardId;
        }
        // if we've already flipped a card before
        else {
          const singleCards = [...document.querySelectorAll(".single-card")];
          currentCardId = singleCard.dataset.cardId;
          // if it is the second half of pair
          if (currentCardId === preveiousCardId) {
            // set found flag to both found cards
            SetFoundFlag(singleCards);
            GameOver();
            preveiousCardId = false;
          } else {
            // if the card we flipped doesn't match previous card
            eventListenerOnPause = true;
            setTimeout(() => {
              turnCardsBack(singleCards);
            }, 400);
          }
        }
      }
    }
  });
  deckContainer.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });
};

function turnCardsBack(singleCards) {
  singleCards.forEach((element) => {
    if (element.dataset.found === "false") {
      if (element.classList.contains("single-card-flip")) {
        element.classList.remove("single-card-flip");
      }
    }
    eventListenerOnPause = false;
    preveiousCardId = false;
    currentCardId = false;
  });
}

function SetFoundFlag(singleCards) {
  singleCards.forEach((element) => {
    if (element.dataset.cardId === currentCardId) {
      element.dataset.found = true;
    }
  });
}

function GameOver() {
  if (!pairsToWin) {
    pairsToWin = currentSize / 2;
  }
  pairsToWin--;
  if (pairsToWin === 0) {
    gameFSM(gameStates.gameoverSuccess);
    // return console.log(`you won`);
    return;
  }

  return pairsToWin;
}
export { addGameLogic };
