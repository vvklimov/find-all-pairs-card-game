import { getElement, getStorageItem, setStorageItem } from "../../utils.js";
import { gameFSM } from "../gameFSM.js";
import { gameStates } from "../../data.js";
import { BestTimeUpdate } from "./timersSetup.js";
import { displayGameMenu } from "../../navbars/gameMenu.js";

let timerInterval,
  currentGameState,
  milliseconds,
  seconds,
  minutes,
  isPaused,
  msformat,
  pulseFlag;

function updateTimer(timerMinutes, timerSeconds, timerMSeconds) {
  timerMinutes.textContent = timerFormat(minutes);
  timerSeconds.textContent = timerFormat(seconds);
  timerMSeconds.textContent = timerFormat(msformat);
}

function startTimer() {
  SetDefaultVarValues();
  const timer = getElement(".current-game-time");
  let targetTimer = getElement(".target-time");
  let targetSeconds = targetTimer.querySelector(".sec").textContent;
  let targetMinutes = targetTimer.querySelector(".min").textContent;

  const timerMinutes = timer.querySelector(".min");
  const timerSeconds = timer.querySelector(".sec");
  const timerMSeconds = timer.querySelector(".msec");
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (!isPaused) {
        milliseconds += 10;
        msformat = milliseconds / 10;
        if (milliseconds >= 1000) {
          milliseconds = 0;
          msformat = 0;
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
        }
        updateTimer(timerMinutes, timerSeconds, timerMSeconds);
        const targetSecondsFormat =
          parseInt(targetMinutes) * 60 + parseInt(targetSeconds);
        let currentSecondsFormat = minutes * 60 + seconds;

        // console.log(currentMSeconds);
        currentGameState = JSON.parse(getStorageItem("currentGameState"));
        if (currentGameState === gameStates.gameoverSuccess) {
          stopTimer();
          togglePulse();
          BestTimeUpdate(minutes, seconds, msformat);
        }

        if (targetSecondsFormat - currentSecondsFormat <= 5 && pulseFlag) {
          togglePulse();
        }
        if (targetSecondsFormat === currentSecondsFormat) {
          stopTimer();
          togglePulse();
          gameFSM(gameStates.gameoverFailure);
          displayGameMenu(gameStates.gameoverFailure);
          return;
        }
      }
    }, 10);
  }
}

function pauseTimer() {
  isPaused = true;
}
function stopTimer() {
  isPaused = true;
  RemoveTimer();
}

function resumeTimer() {
  setTimeout(() => (isPaused = false), 300);
}

function timerFormat(timerUnit) {
  if (timerUnit < 10) return `0${timerUnit}`;
  return timerUnit;
}
function SetDefaultVarValues() {
  timerInterval = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  isPaused = false;
  msformat = 0;
  pulseFlag = true;
}
function togglePulse() {
  const pulsatingElements = [
    ...document.querySelectorAll(".current-game-time>.timer-format h5"),
  ];
  let currentGameState = JSON.parse(getStorageItem("currentGameState"));
  pulsatingElements.forEach((heading) => {
    if (
      !heading.classList.contains("pulse") &&
      currentGameState === gameStates.game
    ) {
      if (
        heading.classList.contains("min") ||
        heading.classList.contains("sec") ||
        heading.classList.contains("msec")
      ) {
        heading.classList.add("pulse");
      }
    } else if (heading.classList.contains("pulse")) {
      heading.classList.remove("pulse");
    }
  });

  pulseFlag = false;
}
function RemoveTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
}

export { startTimer, pauseTimer, resumeTimer, timerFormat, RemoveTimer };
