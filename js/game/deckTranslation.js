import { getElement } from "../utils.js";

async function TransformCards(cards) {
  const permutatedCards = OddEvenRow(cards);
  for (const card of permutatedCards) {
    await TransformCard(card);
  }
  // finishing transform aninmation for the last card
  await new Promise((resolve) => setTimeout(resolve, 500));
}

// btn.addEventListener("click", TransformCards);

// moves cards to its origin coordinates
async function TransformCard(card) {
  return new Promise((resolve, reject) => {
    if (card) {
      {
        setTimeout(() => {
          card.style.visibility = "visible";
          card.style.transform = `translate(0px, 0px)`;
          resolve();
        }, 200);
      }
    } else {
      reject(new Error(`there is no card`));
    }
  });
}

// moves cards to the left center of hero element, player cannot see them
async function hideCards(position, cards) {
  const hero = getElement(".hero");
  const {
    top: topCoor,
    bottom: bottomCoor,
    left: leftCoor,
    right: rightCoor,
  } = hero.getBoundingClientRect();
  const cardWrapper = [...document.querySelectorAll(".single-card-wrapper")];
  // center of hero
  const targetPositionY = (bottomCoor - topCoor) / 2;
  const targetPositionX = (rightCoor - leftCoor) / 2;
  let xDiff, yDiff, cardCenterX, cardCenterY;
  cards.forEach((card, index) => {
    const currentPos = card.getBoundingClientRect();
    cardCenterX = (currentPos.right - currentPos.left) / 2;
    cardCenterY = (currentPos.bottom - currentPos.top) / 2;
    // console.log(cardCenterX, currentPos.right, currentPos.left);
    if (position === "default") {
      xDiff = -currentPos.right - 20;
      yDiff = targetPositionY - currentPos.top;
    } else if (position === "center") {
      // todo!
      xDiff = targetPositionX - (currentPos.right - cardCenterX);
      yDiff = targetPositionY - (currentPos.bottom - cardCenterY);
    } else if (position === "center-right") {
      //  as it is already centered vertically, in order to maintain its vertical position we  have to calculate from inital card coordinates(its wrappers)
      const {
        top: wrapperTop,
        bottom: wrapperBottom,
        left: wrapperLeft,
        right: wrapperRight,
      } = cardWrapper[index].getBoundingClientRect();
      xDiff = rightCoor - (wrapperLeft - (wrapperRight - wrapperLeft) / 2);
      // yDiff = targetPositionY - (currentPos.top + cardCenterY);
      yDiff =
        targetPositionY - (wrapperBottom - (wrapperBottom - wrapperTop) / 2);
    } else return;
    card.style.transform = `translate(${xDiff}px, ${yDiff}px)`;
    // console.log(card.getBoundingClientRect());
  });
  // wait till animation is finished
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Promise.resolve();
}

//  returns permutated cards array:
// odd row - regular order
// even row - reverse order
function OddEvenRow(cards) {
  const oddRowCards = [];
  const evenRowCards = [];
  cards.map((card) => {
    if (card.classList.contains("odd-row")) {
      PermutateArrays(evenRowCards, oddRowCards);
      oddRowCards.push(card);
    } else if (card.classList.contains("even-row")) {
      evenRowCards.push(card);
    }
  });
  PermutateArrays(evenRowCards, oddRowCards);
  return oddRowCards;
}

function PermutateArrays(evenRowCards, oddRowCards) {
  if (evenRowCards.length !== 0) {
    while (evenRowCards.length !== 0) {
      oddRowCards.push(evenRowCards.pop());
    }
  }
  return;
}

async function RemoveDeck() {
  const cards = [...document.querySelectorAll(".single-card-container")];

  // TODO
  // add function flipping backside up flipped cards

  await hideCards("center", cards);
  //  moving cards to the left
  await hideCards("center-right", cards);
}
async function SnakeLikeArrival() {
  const cards = [...document.querySelectorAll(".single-card-container")];
  cards.forEach((card) => {
    // allows further interaction with cards
    card.style.display = "block";
  });
  // putting cards to the left center
  await hideCards("default", cards);
  // snake like appearance
  await TransformCards(cards);
}

function SetupOddEvenRowClass(numberOfColumns, cards) {
  let i = 0;
  let toggleClass = false;
  // toggleClass === false =====> odd row
  // toggleClass === true ======> even row

  cards.forEach((card) => {
    if (i % numberOfColumns === 0 && i !== 0) {
      toggleClass = !toggleClass;
    }
    i++;
    if (!toggleClass) {
      card.classList.add("odd-row");
    } else {
      card.classList.add("even-row");
    }
  });
}

export { SetupOddEvenRowClass, SnakeLikeArrival, RemoveDeck };
