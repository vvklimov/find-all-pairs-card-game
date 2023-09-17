import { timers, targetTimeValues } from "../../data.js";
import { getElement, getStorageItem } from "../../utils.js";

const timerContainer = getElement(".timer-container");

function timersSetup(name) {
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
        // todo
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
timersSetup(getTargetTimeValuesName());

function getTargetTimeValuesName() {
  const settings = JSON.parse(getStorageItem("settings"));
  if (settings) {
    let { difficulty, size } = settings;
    size = size.slice(0, 2);
    const name = `${difficulty}${size}`;
    return name;
  }
}
getTargetTimeValuesName();
export { timersSetup, getTargetTimeValuesName };
