import { decks } from "../../data.js";

const url = `https://randomuser.me/api/?results=18`;

const fetchRandomPerson = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data.results;
};

const getRandomPeople = async () => {
  const promises = decks.map(async (deck) => {
    if (deck.deckName === "people") {
      const peopleArray = await fetchRandomPerson(url);
      const cardSrcPromises = deck.cardsSrc.map(async (image, index) => {
        image.cardSrc = peopleArray[index].picture.large;
      });
      await Promise.all(cardSrcPromises);
    }
  });
  await Promise.all(promises);
};

export { getRandomPeople };
