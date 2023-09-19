import { gameStates } from "../data.js";
import { getElement, getStorageItem } from "../utils.js";
import { gameFSM } from "../game/gameFSM.js";
const newGameBtns = [...document.querySelectorAll(".new-game-btn")];
const gameMenu = getElement(".game-menu");
let renderFlag = true;

newGameBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let currentGameState = JSON.parse(getStorageItem("currentGameState"));
    displayGameMenu(currentGameState);
  });
});

// hide rules before domcontent loaded
// add script at the very beginning of body with checking show rules
function displayGameMenu(currentGameState, min, sec, msec, recordFlag) {
  gameFSM(gameStates.pause);
  if (!gameMenu.classList.contains("show")) gameMenu.classList.add("show");
  const gameMenuBtns = [...gameMenu.querySelectorAll(".btn")];
  const textContent = gameMenu.querySelector(".text-content");
  if (renderFlag) {
    // player won
    if (currentGameState === gameStates.gameoverSuccess) {
      // player set new record
      renderFlag = false;
      if (recordFlag) {
        textContent.innerHTML = `<h2>new record!</h2><h4>your time: ${min} : ${sec} : ${msec}</h4>`;
      }
      // player won, without setting new record
      else {
        textContent.innerHTML = `<h2>you won!</h2><h4>your time: ${min} : ${sec} : ${msec}</h4>`;
      }
    }
    // player lost
    else if (currentGameState === gameStates.gameoverFailure) {
      textContent.innerHTML = `<h4>you lost</h4>`;
    }
    // game is not finished yet
    else {
      textContent.innerHTML = `<h4>start a new game?</h4>`;
    }
  }
  gameMenuBtns.forEach((gameMenuBtn) => {
    gameMenuBtn.addEventListener("click", (e) => {
      const btn = e.currentTarget;
      if (btn.classList.contains("close-btn")) {
        gameFSM(gameStates.resume);
        if (gameMenu.classList.contains("show"))
          gameMenu.classList.remove("show");
      } else if (btn.classList.contains("start-new-game-btn")) {
        location.reload();
      }
    });
  });
}
export { displayGameMenu };
