import { gameStates } from "../data.js";
import { getElement } from "../utils.js";
import { gameFSM } from "../game/gameFSM.js";
const newGameBtns = [...document.querySelectorAll(".new-game-btn")];
const gameMenu = getElement(".game-menu");

newGameBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    gameFSM(gameStates.pause);
    if (!gameMenu.classList.contains("show")) gameMenu.classList.add("show");
    const gameMenuBtns = [...gameMenu.querySelectorAll(".btn")];
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
  });
});

// hide rules before domcontent loaded
// add script at the very beginning of body with checking show rules
