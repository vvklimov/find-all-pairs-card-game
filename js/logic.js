import "./deckSetup.js";
import { deckContainer, currentSize } from "./deckSetup.js";
import { getElement } from "./utils.js";
import { gameFSM } from "./gameFSM.js";
import { gameStates } from "./data.js";

const singleCards = [...document.querySelectorAll(".single-card")];
let preveiousCardId = false;
let currentCardId = false;
let eventListenerOnPause = false;
let pairsToWin = currentSize / 2;

deckContainer.addEventListener("click", (e) => {
  gameFSM(gameStates.game);
  if (!eventListenerOnPause) {
    const singleCard = e.target.parentElement.parentElement;
    const singleCardBackSide = e.target.parentElement;

    if (
      singleCard.classList.contains("single-card") &&
      singleCardBackSide.classList.contains("single-card-back")
    ) {
      singleCard.classList.add("single-card-flip");
      // if we flip first card of pair
      if (!preveiousCardId) {
        preveiousCardId = singleCard.dataset.cardId;
      }
      // if we've already flipped a card before
      else {
        currentCardId = singleCard.dataset.cardId;
        // if it is the second half of pair
        if (currentCardId === preveiousCardId) {
          // set found flag to both found cards
          SetFoundFlag();
          GameOver();
          preveiousCardId = false;
        } else {
          // if the card we flipped doesn't match previous card
          eventListenerOnPause = true;
          setTimeout(turnCardsBack, 400);
        }
      }
    }
  }
});

function turnCardsBack() {
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

function SetFoundFlag() {
  singleCards.forEach((element) => {
    if (element.dataset.cardId === currentCardId) {
      element.dataset.found = true;
    }
  });
}
// /////////////////////////
// handle gameoverFailure when timer will be done
// ////////////////////////
function GameOver() {
  pairsToWin--;
  if (pairsToWin === 0) {
    gameFSM(gameStates.gameoverSuccess);
    return console.log(`you won`);
  }
  return pairsToWin;
}
