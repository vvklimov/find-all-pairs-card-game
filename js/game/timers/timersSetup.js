import { timers, targetTimeValues, navTags, gameStates } from "../../data.js";
import { getElement, getStorageItem, setStorageItem } from "../../utils.js";
import { timerFormat } from "./countUpTimer.js";
import { displayGameMenu } from "../../navbars/gameMenu.js";

function timersSetup(name) {
  const timerContainer = getElement(".timer-container");
  timerContainer.innerHTML = timers
    .map((timer) => {
      const { timerClass, timerName } = timer;
      // target time handling
      if (timerClass === "target-time") {
        const targetTime = targetTimeValues[name][0];
        const { mins, secs, msecs } = targetTime;
        timer.timerUnitMin = mins;
        timer.timerUnitSec = secs;
        timer.timerUnitMsec = msecs;
      } else if (timerClass === "best-time") {
        const bestTime = BestTimeSetup();
        if (bestTime) {
          const { min, sec, msec } = bestTime;
          if (min && sec && msec) {
            timer.timerUnitMin = min;
            timer.timerUnitSec = sec;
            timer.timerUnitMsec = msec;
          } else {
            timer.timerUnitMin = "--";
            timer.timerUnitSec = "--";
            timer.timerUnitMsec = "--";
          }
        }
      }
      const {
        timerUnitMin: min,
        timerUnitSec: sec,
        timerUnitMsec: msec,
      } = timer;

      return ` <div class="timer-wrapper">
          <div class="${timerClass}">
            <div class="timer-format">
              <h5 class="tag-btn-gradient gradient-hover-effect">
                ${timerName}
              </h5>
              <div class="timer-unit-format">
                <h5 class="min">${min}</h5>
                <h5 class="tag-btn-gradient gradient-hover-effect">m</h5>
              </div>
              <h5>:</h5>
              <div class="timer-unit-format">
                <h5 class="sec">${sec}</h5>
                <h5 class="tag-btn-gradient gradient-hover-effect">s</h5>
              </div>
              <h5>:</h5>
              <div class="timer-unit-format">
                <h5 class="msec">${msec}</h5>
                <h5 class="tag-btn-gradient gradient-hover-effect">ms</h5>
              </div>
            </div>
          </div>
        </div>`;
    })
    .join("");
}
// timersSetup(getTargetTimeValuesName());

function getTargetTimeValuesName() {
  const settings = JSON.parse(getStorageItem("currentGameSettings"));
  if (settings) {
    let { difficulty, size } = settings;
    size = size.slice(0, 2);
    const name = `${difficulty}${size}`;
    return name;
  }
}
// getTargetTimeValuesName();

function BestTimeSetup() {
  let bestTime = getStorageItem("bestTime");
  // setup default
  if (bestTime.length === 0) {
    bestTime = { ...bestTime };
    navTags.map((setting) => {
      if (setting.tag === "size") {
        setting.subtags.forEach((deckSize) => {
          bestTime[deckSize.subtagClass] = [{ min: "", sec: "", msec: "" }];
        });
        setStorageItem("bestTime", bestTime);
      }
    });
    return false;
  } else {
    const settings = JSON.parse(getStorageItem("currentGameSettings"));
    const { size: currentSize } = settings;
    bestTime = JSON.parse(bestTime);
    const currentBestTime = bestTime[currentSize][0];
    return currentBestTime;
  }
}
function BestTimeUpdate(minutes, seconds, msformat) {
  let bestTime = BestTimeSetup();
  let currentMSeconds = (minutes * 60 + seconds) * 1000 + msformat * 10;
  const { min, sec, msec } = bestTime;
  const settings = JSON.parse(getStorageItem("currentGameSettings"));
  const { size: currentSize } = settings;
  const previousBestTime = JSON.parse(getStorageItem("bestTime"));
  let newRecord = false;

  if (!min && !sec && !msec) {
    newRecord = true;
  } else if (CompareTimers(min, sec, msec, currentMSeconds)) {
    newRecord = true;
  }
  if (newRecord) {
    // set new best time in local storage
    bestTime.min = timerFormat(minutes);
    bestTime.sec = timerFormat(seconds);
    bestTime.msec = timerFormat(msformat);
    previousBestTime[currentSize][0] = bestTime;
    setStorageItem("bestTime", previousBestTime);
    displayNewBestTime(minutes, seconds, msformat);
  }
  displayGameMenu(
    gameStates.gameoverSuccess,
    timerFormat(minutes),
    timerFormat(seconds),
    timerFormat(msformat),
    newRecord
  );
  // console.log(timerFormat(minutes),
  //   timerFormat(seconds, timerFormat(msformat), newRecord));
  return;
}
function CompareTimers(prevMin, prevSec, prevMSec, currentMSeconds) {
  prevMin = parseInt(prevMin);
  prevSec = parseInt(prevSec);
  prevMSec = parseInt(prevMSec);
  const PreviousMSeconds = (prevMin * 60 + prevSec) * 1000 + prevMSec * 10;
  if (currentMSeconds < PreviousMSeconds) return true;
  return false;
}
function displayNewBestTime(minutes, seconds, msformat) {
  const bestTimeContainer = getElement(".best-time");
  const minutesContainer = bestTimeContainer.querySelector(".min");
  const secondsContainer = bestTimeContainer.querySelector(".sec");
  const msecondsContainer = bestTimeContainer.querySelector(".msec");
  minutesContainer.textContent = timerFormat(minutes);
  secondsContainer.textContent = timerFormat(seconds);
  msecondsContainer.textContent = timerFormat(msformat);
}
export { timersSetup, getTargetTimeValuesName, BestTimeSetup, BestTimeUpdate };
