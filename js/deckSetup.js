import { getElement, getStorageItem } from "./utils.js";
import { decks } from "./data.js";
import { IndexSelection } from "./randomizer.js";

export const deckContainer = getElement(".deck-container");
// extracting current settings
const settings = JSON.parse(getStorageItem("settings"));
const { themes: currentTheme, size, difficulty: currentDifficulty } = settings;
export const currentSize = Number(size.slice(0, 2));

function deckSetup(currentTheme, numberOfPairs, currentDifficulty) {
  deckContainer.innerHTML = decks
    .map((deck) => {
      // desctructing array
      const { deckName, deckImg, cardsSrc } = deck;
      if (currentTheme === deckName) {
        let selectedCards = IndexSelection(currentSize, cardsSrc.length);
        // console.log(selectedCards);
        // console.log(cardsSrc);
        return selectedCards
          .map((index) => {
            // const { cardSrc: src } = card;
            const { cardSrc: src } = cardsSrc[index];

            return ` <div class="single-card-container">
            <div class="single-card" data-card-id="${index}" data-found="false">
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
