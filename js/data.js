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
        subtagName: "20 cards",
        subtagClass: "20-cards",
      },
      {
        subtagName: "24 cards",
        subtagClass: "24-cards",
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
  {
    tag: "other",
    subtags: [
      {
        subtagName: "show rules",
        subtagClass: "show-rules",
      },
      {
        subtagName: "sound effects",
        subtagClass: "sound-effects",
      },
    ],
  },
];

const defaultSettings = {
  difficulty: "normal",
  size: "16-cards",
  themes: "dark-fantasy",
  other: { "show-rules": true, "sound-effects": true },
};
const decks = [
  {
    deckName: "nature",
    deckImg: "./assets/images/nature/img_1.jpg",
    cardsSrc: [
      { cardSrc: "./assets/images/nature/img_1.jpg" },
      { cardSrc: "./assets/images/nature/img_2.jpg" },
      { cardSrc: "./assets/images/nature/img_3.jpg" },
      { cardSrc: "./assets/images/nature/img_4.jpg" },
      { cardSrc: "./assets/images/nature/img_5.jpg" },
      { cardSrc: "./assets/images/nature/img_6.jpg" },
      { cardSrc: "./assets/images/nature/img_7.jpg" },
      { cardSrc: "./assets/images/nature/img_8.jpg" },
      { cardSrc: "./assets/images/nature/img_9.jpg" },
      { cardSrc: "./assets/images/nature/img_10.jpg" },
      { cardSrc: "./assets/images/nature/img_11.jpg" },
      { cardSrc: "./assets/images/nature/img_12.jpg" },
      { cardSrc: "./assets/images/nature/img_13.jpg" },
      { cardSrc: "./assets/images/nature/img_14.jpg" },
      { cardSrc: "./assets/images/nature/img_15.jpg" },
      { cardSrc: "./assets/images/nature/img_16.jpg" },
      { cardSrc: "./assets/images/nature/img_17.jpg" },
      { cardSrc: "./assets/images/nature/img_18.jpg" },
      { cardSrc: "./assets/images/nature/img_19.jpg" },
    ],
  },
  {
    deckName: "dark-fantasy",
    deckImg: "./assets/images/nature/img_2.jpg",
    cardsSrc: [
      { cardSrc: "./assets/images/nature/img_1.jpg" },
      { cardSrc: "./assets/images/nature/img_2.jpg" },
      { cardSrc: "./assets/images/nature/img_3.jpg" },
      { cardSrc: "./assets/images/nature/img_4.jpg" },
      { cardSrc: "./assets/images/nature/img_5.jpg" },
      { cardSrc: "./assets/images/nature/img_6.jpg" },
      { cardSrc: "./assets/images/nature/img_7.jpg" },
      { cardSrc: "./assets/images/nature/img_8.jpg" },
      { cardSrc: "./assets/images/nature/img_9.jpg" },
      { cardSrc: "./assets/images/nature/img_10.jpg" },
      { cardSrc: "./assets/images/nature/img_11.jpg" },
      { cardSrc: "./assets/images/nature/img_12.jpg" },
      { cardSrc: "./assets/images/nature/img_13.jpg" },
      { cardSrc: "./assets/images/nature/img_14.jpg" },
      { cardSrc: "./assets/images/nature/img_15.jpg" },
      { cardSrc: "./assets/images/nature/img_16.jpg" },
      { cardSrc: "./assets/images/nature/img_17.jpg" },
      { cardSrc: "./assets/images/nature/img_18.jpg" },
      { cardSrc: "./assets/images/nature/img_19.jpg" },
    ],
  },
  {
    deckName: "people",
    deckImg: "./assets/images/nature/img_3.jpg",
    cardsSrc: [
      { cardSrc: "./assets/images/nature/img_1.jpg" },
      { cardSrc: "./assets/images/nature/img_2.jpg" },
      { cardSrc: "./assets/images/nature/img_3.jpg" },
      { cardSrc: "./assets/images/nature/img_4.jpg" },
      { cardSrc: "./assets/images/nature/img_5.jpg" },
      { cardSrc: "./assets/images/nature/img_6.jpg" },
      { cardSrc: "./assets/images/nature/img_7.jpg" },
      { cardSrc: "./assets/images/nature/img_8.jpg" },
      { cardSrc: "./assets/images/nature/img_9.jpg" },
      { cardSrc: "./assets/images/nature/img_10.jpg" },
      { cardSrc: "./assets/images/nature/img_11.jpg" },
      { cardSrc: "./assets/images/nature/img_12.jpg" },
      { cardSrc: "./assets/images/nature/img_13.jpg" },
      { cardSrc: "./assets/images/nature/img_14.jpg" },
      { cardSrc: "./assets/images/nature/img_15.jpg" },
      { cardSrc: "./assets/images/nature/img_16.jpg" },
      { cardSrc: "./assets/images/nature/img_17.jpg" },
      { cardSrc: "./assets/images/nature/img_18.jpg" },
      { cardSrc: "./assets/images/nature/img_19.jpg" },
    ],
  },
  {
    deckName: "javascript-frameworks",
    deckImg: "./assets/images/nature/img_4.jpg",
    cardsSrc: [
      { cardSrc: "./assets/images/nature/img_1.jpg" },
      { cardSrc: "./assets/images/nature/img_2.jpg" },
      { cardSrc: "./assets/images/nature/img_3.jpg" },
      { cardSrc: "./assets/images/nature/img_4.jpg" },
      { cardSrc: "./assets/images/nature/img_5.jpg" },
      { cardSrc: "./assets/images/nature/img_6.jpg" },
      { cardSrc: "./assets/images/nature/img_7.jpg" },
      { cardSrc: "./assets/images/nature/img_8.jpg" },
      { cardSrc: "./assets/images/nature/img_9.jpg" },
      { cardSrc: "./assets/images/nature/img_10.jpg" },
      { cardSrc: "./assets/images/nature/img_11.jpg" },
      { cardSrc: "./assets/images/nature/img_12.jpg" },
      { cardSrc: "./assets/images/nature/img_13.jpg" },
      { cardSrc: "./assets/images/nature/img_14.jpg" },
      { cardSrc: "./assets/images/nature/img_15.jpg" },
      { cardSrc: "./assets/images/nature/img_16.jpg" },
      { cardSrc: "./assets/images/nature/img_17.jpg" },
      { cardSrc: "./assets/images/nature/img_18.jpg" },
      { cardSrc: "./assets/images/nature/img_19.jpg" },
    ],
  },
  {
    deckName: "surprise-me",
    deckImg: "./assets/images/nature/img_5.jpg",
    cardsSrc: [
      { cardSrc: "./assets/images/nature/img_1.jpg" },
      { cardSrc: "./assets/images/nature/img_2.jpg" },
      { cardSrc: "./assets/images/nature/img_3.jpg" },
      { cardSrc: "./assets/images/nature/img_4.jpg" },
      { cardSrc: "./assets/images/nature/img_5.jpg" },
      { cardSrc: "./assets/images/nature/img_6.jpg" },
      { cardSrc: "./assets/images/nature/img_7.jpg" },
      { cardSrc: "./assets/images/nature/img_8.jpg" },
      { cardSrc: "./assets/images/nature/img_9.jpg" },
      { cardSrc: "./assets/images/nature/img_10.jpg" },
      { cardSrc: "./assets/images/nature/img_11.jpg" },
      { cardSrc: "./assets/images/nature/img_12.jpg" },
      { cardSrc: "./assets/images/nature/img_13.jpg" },
      { cardSrc: "./assets/images/nature/img_14.jpg" },
      { cardSrc: "./assets/images/nature/img_15.jpg" },
      { cardSrc: "./assets/images/nature/img_16.jpg" },
      { cardSrc: "./assets/images/nature/img_17.jpg" },
      { cardSrc: "./assets/images/nature/img_18.jpg" },
      { cardSrc: "./assets/images/nature/img_19.jpg" },
    ],
  },
];
const gameStates = {
  idle: "idle",
  pause: "pause",
  resume: "resume",
  game: "game",
  gameoverSuccess: "gameoverSuccess",
  gameoverFailure: "gameoverFailure",
};

const timers = [
  {
    timerClass: "target-time",
    timerName: "target time:",
    timerUnitMin: "",
    timerUnitSec: "",
    timerUnitMsec: "",
  },
  {
    timerClass: "current-game-time",
    timerName: "time:",
    timerUnitMin: "00",
    timerUnitSec: "00",
    timerUnitMsec: "00",
  },
  {
    timerClass: "best-time",
    timerName: "best time:",
    timerUnitMin: "--",
    timerUnitSec: "--",
    timerUnitMsec: "--",
  },
];
const targetTimeValues = {
  easy16: [
    {
      mins: "01",
      secs: "00",
      msecs: "00",
    },
  ],
  normal16: [
    {
      mins: "00",
      secs: "30",
      msecs: "00",
    },
  ],
  hard16: [
    {
      mins: "00",
      // don't forget to change it back to 20 seconds
      secs: "07",
      msecs: "00",
    },
  ],
  // 20
  easy20: [
    {
      mins: "01",
      secs: "10",
      msecs: "00",
    },
  ],
  normal20: [
    {
      mins: "00",
      secs: "35",
      msecs: "00",
    },
  ],
  hard20: [
    {
      mins: "00",
      secs: "25",
      msecs: "00",
    },
  ],
  // 24
  easy24: [
    {
      mins: "01",
      secs: "20",
      msecs: "00",
    },
  ],
  normal24: [
    {
      mins: "00",
      secs: "42",
      msecs: "00",
    },
  ],
  hard24: [
    {
      mins: "00",
      secs: "30",
      msecs: "00",
    },
  ],
  // 36
  easy36: [
    {
      mins: "02",
      secs: "30",
      msecs: "00",
    },
  ],
  normal36: [
    {
      mins: "01",
      secs: "30",
      msecs: "00",
    },
  ],
  hard36: [
    {
      mins: "01",
      secs: "05",
      msecs: "00",
    },
  ],
};
export {
  navTags,
  defaultSettings,
  decks,
  gameStates,
  timers,
  targetTimeValues,
};
