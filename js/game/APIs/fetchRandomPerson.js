import { decks } from "../../data.js";

const url = `https://randomuser.me/api/?results=18`;

const fetchRandomPerson = async (url) => {
  try {
    const response = await fetch(url);
    if (response) {
      const data = await response.json();
      return data.results;
    }
  } catch (error) {
    return console.log(error);
  }
};

const getRandomPeople = async () => {
  const promises = decks.map(async (deck) => {
    if (deck.deckName === "people") {
      const peopleArray = await fetchRandomPerson(url);
      if (peopleArray) {
        const cardSrcPromises = deck.cardsSrc.map(async (image, index) => {
          image.cardSrc = peopleArray[index].picture.large;
        });
        await Promise.all(cardSrcPromises);
      } else return;
    }
  });
  await Promise.all(promises);
};

export { getRandomPeople };
