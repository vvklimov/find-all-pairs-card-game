import { getElement, getStorageItem } from "./utils.js";
import { decks } from "./data.js";

const deckContainer = getElement(".deck-container");
// extracting current theme
let settings = getStorageItem("settings");
settings = JSON.parse(settings);
let currentTheme = settings.themes;

function deckSetup(currentTheme) {
  deckContainer.innerHTML = decks
    .map((deck) => {
      // desctructing array
      const { deckName, deckImg, cardsSrc } = deck;
      if (currentTheme === deckName) {
        return cardsSrc
          .map((card) => {
            const { cardSrc: src } = card;

            return ` <div class="single-card-container">
            <div class="single-card" data-card-id="1">
              <div class="single-card-back">
                <img
                  src="${deckImg}"
                  alt="card"
                  class="img card-img"
                />
              </div>
              <div class="single-card-front">
                <img
                  src="${src}"
                  alt="card"
                  class="img card-img"
                />
              </div>
            </div>
          </div>`;
          })
          .join("");
      }
    })
    .join("");
}
deckSetup(currentTheme);
