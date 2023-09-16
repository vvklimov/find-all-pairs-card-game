import { timers } from "./data.js";
import { getElement } from "./utils.js";
const timerContainer = getElement(".timer-container");

timerContainer.innerHTML = timers
  .map((timer) => {
    const {
      timerClass,
      timerName,
      timerUnitMin: min,
      timerUnitMsec: msec,
      timerUnitSec: sec,
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
