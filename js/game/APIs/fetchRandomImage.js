// https://picsum.photos/159/250
import { decks } from "../../data.js";
const url = "https://picsum.photos/159/250";

const fetchRandomImage = async (url) => {
  const response = await fetch(url);
  return response.url;
};

const getRandomImages = async () => {
  const promises = decks.map(async (deck) => {
    if (deck.deckName === "surprise-me") {
      if (!deck.deckImg) {
        deck.deckImg = await fetchRandomImage(url);
      }
      const cardSrcPromises = deck.cardsSrc.map(async (image) => {
        image.cardSrc = await fetchRandomImage(url);
      });
      await Promise.all(cardSrcPromises);
    }
  });
  await Promise.all(promises);
};

export { getRandomImages };
