import "./deckSetup.js";
import { deckContainer, currentSize } from "./deckSetup.js";
import { getElement, getStorageItem, setStorageItem } from "../utils.js";
import { gameFSM } from "./gameFSM.js";
import { gameStates } from "../data.js";
import { editSettings } from "../settings.js";

let currentCardId, eventListenerOnPause, preveiousCardId, pairsToWin;

const addGameLogic = () => {
  SetDefaultVarValues();
  deckContainer.addEventListener("click", GameLogicHandler);
  document.addEventListener("dragstart", preventDefaultDrag);
};
function GameLogicHandler(e) {
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
          // console.log(preveiousCardId, currentCardId);
          // if the card we flipped doesn't match previous card
          eventListenerOnPause = true;
          setTimeout(() => {
            turnCardsBack(singleCards);
          }, 400);
        }
      }
    }
  }
}

function preventDefaultDrag(e) {
  e.preventDefault();
}
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
  CardsVanishing();
}

function GameOver() {
  pairsToWin--;
  if (pairsToWin === 0) {
    gameFSM(gameStates.gameoverSuccess);
    return;
  }

  return pairsToWin;
}
function RemoveEventListenersFromHero() {
  const hero = getElement(".hero");
  deckContainer.removeEventListener("click", GameLogicHandler);
  hero.removeEventListener("dragstart", preventDefaultDrag);
}
function SetDefaultVarValues() {
  currentCardId = false;
  eventListenerOnPause = false;
  preveiousCardId = false;

  // pairsToWin = currentSize / 2;
  pairsToWin = 1;
}

function CardsVanishing() {
  const cards = [...document.querySelectorAll(".single-card")];
  const currentGameSettings = JSON.parse(getStorageItem("currentGameSettings"));
  let hideFoundCards = currentGameSettings.other["hide-found-cards"];

  cards.forEach((card) => {
    if (hideFoundCards && JSON.parse(card.dataset.found) === true) {
      if (!card.classList.contains("single-card-vanishing")) {
        card.classList.add("single-card-vanishing");
        card.childNodes[1].style.cursor = "default";
      }
    } else {
      if (card.classList.contains("single-card-vanishing")) {
        card.classList.remove("single-card-vanishing");
        card.childNodes[1].style.cursor = "pointer";
      }
    }
  });
}

export { addGameLogic, RemoveEventListenersFromHero, CardsVanishing };
