function IndexSelection(currentSize, arrayLength) {
  const randomIndexes = [];
  let randomNumber;
  while (randomIndexes.length !== currentSize) {
    // rolling random number
    if (arrayLength) {
      randomNumber = Math.floor(Math.random() * arrayLength);
    } else {
      randomNumber = Math.floor(Math.random() * currentSize);
    }
    // creating array with unique values
    if (!randomIndexes.includes(randomNumber)) {
      // we want pairs
      randomIndexes.push(randomNumber);
      randomIndexes.push(randomNumber);
    }
  }
  return ArrayShuffle(randomIndexes);
}

function ArrayShuffle(array) {
  const shuffledArray = [];
  while (array.length !== 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    shuffledArray.push(array.splice(randomIndex, 1)[0]);
  }
  return shuffledArray;
}

export { IndexSelection };
