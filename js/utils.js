function getElement(selection) {
  const element = document.querySelector(`${selection}`);
  if (element) return element;
  throw new Error(`Please check ${selection} selector, no such element exists`);
}

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export { getElement, getStorageItem, setStorageItem };
