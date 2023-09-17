import { gameStates } from "../data.js";
import { getStorageItem, setStorageItem } from "../utils.js";

import { startTimer, resumeTimer, pauseTimer } from "./timers/countUpTimer.js";
const gameFSM = (state) => {
  const { idle, pause, gameoverFailure, gameoverSuccess, game, resume } =
    gameStates;
  let previousGameState = getStorageItem("currentGameState");
  //   if there is no set state yet or we want to set idle state
  if (previousGameState.length === 0 || state === idle) {
    return setStorageItem("currentGameState", idle);
  }
  //   if there is a set state
  else {
    previousGameState = JSON.parse(previousGameState);
    // from idle we can get to only game state
    if (previousGameState === idle) {
      if (state === game) {
        startTimer();
        return setStorageItem("currentGameState", game);
      } else return;
    }

    // from game we can get to any state
    else if (previousGameState === game) {
      if (state === pause) {
        pauseTimer();
        return setStorageItem("currentGameState", state);
      } else if (state === gameoverFailure) {
        return setStorageItem("currentGameState", gameoverFailure);
      } else if (state === gameoverSuccess) {
        // todo
      } else return;
    }
    // from pause we can get to game and idle states
    else if (previousGameState === pause) {
      if (state === resume) {
        resumeTimer();
        return setStorageItem("currentGameState", game);
      } else return;
    } else if (
      previousGameState === gameoverFailure ||
      previousGameState === gameoverSuccess
    ) {
      return;
    } else
      throw new Error(`
  FSM failure:
    previousGameState is ${previousGameState}
    state is ${state}
    `);
    // else if (previousGameState === gameoverFailure) {
    //   console.log("failure");
    // }
  }
};
// gameFSM(gameStates.idle);
// gameFSM(gameStates.pause);
// gameFSM(gameStates.gameoverFailure);
// gameFSM(gameStates.gameoverSuccess);

export { gameFSM };
