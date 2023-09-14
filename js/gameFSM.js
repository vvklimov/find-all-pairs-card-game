import { gameStates } from "./data.js";
import { getStorageItem, setStorageItem } from "./utils.js";

const gameFSM = (state) => {
  const { idle, pause, gameoverFailure, gameoverSuccess, game, resume } =
    gameStates;
  let previousGameState = getStorageItem("currentGameState");
  //   if there is no set state yet or we want to set idle state
  if (previousGameState.length === 0 || state === idle) {
    console.log("1");
    return setStorageItem("currentGameState", idle);
  }
  //   if there is a set state
  else {
    previousGameState = JSON.parse(previousGameState);
    // from idle we can get to only game state
    if (previousGameState === idle && state === game) {
      console.log("2");
      return setStorageItem("currentGameState", game);
    }
    // from game we can get to any state
    else if (previousGameState === game && state !== game && state != resume) {
      console.log("3");
      return setStorageItem("currentGameState", state);
    }
    // from pause we can get to game and idle states
    else if (previousGameState === pause && state === resume) {
      console.log("4");
      return setStorageItem("currentGameState", game);
    } else if (
      previousGameState === pause &&
      state !== gameoverFailure &&
      state !== gameoverSuccess &&
      state !== pause
    ) {
      console.log("5");
      return setStorageItem("currentGameState", state);
    }
    // from gameoverSuccess and gameoverFailure we can only get to idle state
    else {
      if (state === gameoverSuccess || state === gameoverFailure)
        return setStorageItem("currentGameState", idle);
    }
  }
};
// gameFSM(gameStates.idle);
// gameFSM(gameStates.pause);
// gameFSM(gameStates.gameoverFailure);
// gameFSM(gameStates.gameoverSuccess);

export { gameFSM };
