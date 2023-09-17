import { getElement, getStorageItem } from "../../utils.js";
import { gameFSM } from "../gameFSM.js";
import { gameStates } from "../../data.js";

// const timer = getElement(".current-game-time");
// console.log(timer);
// const timerMinutes = timer.querySelector(".min");
// const timerSeconds = timer.querySelector(".sec");
// const timerMSeconds = timer.querySelector(".msec");

let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let isPaused = false;
let msformat = 0;
let pulseFlag = true;

function updateTimer(timerMinutes, timerSeconds, timerMSeconds) {
  timerMinutes.textContent = timerFormat(minutes);
  timerSeconds.textContent = timerFormat(seconds);
  timerMSeconds.textContent = timerFormat(msformat);
}

function startTimer() {
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
        if (targetSecondsFormat - currentSecondsFormat <= 5 && pulseFlag) {
          togglePulse();
        }
        if (targetSecondsFormat === currentSecondsFormat) {
          togglePulse();
          stopTimer();
          gameFSM(gameStates.gameoverFailure);
          console.log("time is up");
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
  clearInterval(timerInterval);
}

function resumeTimer() {
  setTimeout(() => (isPaused = false), 300);
}

function timerFormat(timerUnit) {
  if (timerUnit < 10) return `0${timerUnit}`;
  return timerUnit;
}
export { startTimer, pauseTimer, resumeTimer };

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
