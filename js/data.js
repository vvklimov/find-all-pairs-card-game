const navTags = [
  {
    tag: "difficulty",
    subtags: [
      {
        subtagName: "easy",
        subtagClass: "easy",
      },
      {
        subtagName: "normal",
        subtagClass: "normal",
      },
      {
        subtagName: "hard",
        subtagClass: "hard",
      },
    ],
  },
  {
    tag: "size",
    subtags: [
      {
        subtagName: "16 cards",
        subtagClass: "16-cards",
      },
      {
        subtagName: "36 cards",
        subtagClass: "36-cards",
      },
    ],
  },
  {
    tag: "themes",
    subtags: [
      { subtagName: "dark fantasy", subtagClass: "dark-fantasy" },
      { subtagName: "nature", subtagClass: "nature" },
      { subtagName: "people", subtagClass: "people" },
      {
        subtagName: "JavaScript frameworks",
        subtagClass: "javascript-frameworks",
      },
      { subtagName: "surprise me", subtagClass: "surprise-me" },
    ],
  },
];

const defaultSettings = {
  difficulty: "normal",
  size: "16-cards",
  themes: "dark-fantasy",
};
export { navTags, defaultSettings };
