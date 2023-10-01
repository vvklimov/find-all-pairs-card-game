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
const backgrounds = [
  {
    theme: "dark-fantasy",
    src: [
      "./assets/images/backgrounds/dark_fantasy_bg1.png",
      "./assets/images/backgrounds/dark_fantasy_bg2.png",
      "./assets/images/backgrounds/dark_fantasy_bg3.png",
    ],
  },
  {
    theme: "nature",
    src: "./assets/images/backgrounds/nature_bg.png",
  },

  {
    theme: "people",
    src: "./assets/images/backgrounds/people_bg.png",
  },

  {
    theme: "javascript-frameworks",
    src: "./assets/images/backgrounds/js_background.png",
  },

  {
    theme: "surprise-me",
    src: "./assets/images/backgrounds/surprise_me_bg.png",
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
    deckImg: "./assets/images/decks/nature/nature_deck.png",
    cardsSrc: [
      { cardSrc: "assets/images/decks/nature/images/img_1.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_2.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_3.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_4.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_5.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_6.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_7.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_8.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_9.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_10.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_11.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_13.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_14.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_15.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_16.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_17.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_18.jpg" },
      { cardSrc: "assets/images/decks/nature/images/img_19.jpg" },
    ],
  },
  {
    deckName: "dark-fantasy",
    deckImg: "./assets/images/decks/dark_fantasy/dark_fantasy_deck.png",
    cardsSrc: [
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_1.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_2.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_3.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_4.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_5.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_6.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_7.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_8.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_9.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_10.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_11.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_12.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_13.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_14.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_15.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_16.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_17.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_18.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_19.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_20.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_21.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_22.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_23.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_24.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_25.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_26.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_27.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_28.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_29.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_30.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_31.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_32.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_33.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_34.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_35.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_36.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_37.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_38.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_39.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_40.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_41.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_42.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_43.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_44.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_45.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_46.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_47.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_48.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_49.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_50.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_51.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_52.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_53.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_54.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_55.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_56.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_57.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_58.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_59.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_60.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_61.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_62.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_63.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_64.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_65.png" },
      { cardSrc: "./assets/images/decks/dark_fantasy/images/image_66.png" },
    ],
  },
  {
    deckName: "people",
    deckImg: "./assets/images/decks/people/people_deck.png",
    cardsSrc: [
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
    ],
  },
  {
    deckName: "javascript-frameworks",
    deckImg: "./assets/images/decks/javascript/js-logo.png",
    cardsSrc: [
      { cardSrc: "./assets/images/decks/javascript/images/alpine.png" },
      { cardSrc: "./assets/images/decks/javascript/images/angular.png" },
      { cardSrc: "./assets/images/decks/javascript/images/backbone.png" },
      { cardSrc: "./assets/images/decks/javascript/images/cypress.png" },
      { cardSrc: "./assets/images/decks/javascript/images/Ember.png" },
      { cardSrc: "./assets/images/decks/javascript/images/express.png" },
      { cardSrc: "./assets/images/decks/javascript/images/gatsby.png" },
      { cardSrc: "./assets/images/decks/javascript/images/jasmine.png" },
      { cardSrc: "./assets/images/decks/javascript/images/jest.png" },
      { cardSrc: "./assets/images/decks/javascript/images/meteor.png" },
      { cardSrc: "./assets/images/decks/javascript/images/Mocha.png" },
      { cardSrc: "./assets/images/decks/javascript/images/next-js.png" },
      { cardSrc: "./assets/images/decks/javascript/images/nodejs.png" },
      { cardSrc: "./assets/images/decks/javascript/images/nuxt.png" },
      { cardSrc: "./assets/images/decks/javascript/images/playwright.png" },
      { cardSrc: "./assets/images/decks/javascript/images/preact.png" },
      { cardSrc: "./assets/images/decks/javascript/images/storybook.png" },
      { cardSrc: "./assets/images/decks/javascript/images/svelte.png" },
      { cardSrc: "./assets/images/decks/javascript/images/Vue.png" },
    ],
  },
  {
    deckName: "surprise-me",
    deckImg: "./assets/images/decks/random_images/surprise_me_deck.png",
    cardsSrc: [
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
      { cardSrc: "" },
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
  backgrounds,
};
