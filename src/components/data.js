import {createBlockCard} from './blockcards.js';

const maxCardsQuantity = 16;


const createTasks = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ][Math.floor(Math.random() * 3)],

  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,

  tags: new Set([
    `cinema`,
    `entertainment`,
    `myself`,
    `cinema`,
  ]),

  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],

  repeatingDays: {
    'mo': false,
    'tu': false,
    'we': Boolean(Math.round(Math.random())),
    'th': false,
    'fr': false,
    'sa': false,
    'su': false,
  },
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random())),
});

const dataArray = {
  desc: [],
  date: [],
  tags: [],
  color: [],
  repeat: [],
  fav: [],
  arch: [],
};


// sozdajem masiv s danymi vseh kartochek
const generateCardsData = (total = 7) => {
  const cardsData = Array(total).fill().map(createTasks);
  return cardsData;
};

// zapihivajem poluchenoje v peremenuju AllCards
const allCards = generateCardsData(maxCardsQuantity);
const cardsStart = allCards.slice(0, 7);

const getAllData = (repeat) => {
  for (let i = 0; i < repeat; i++) {
    dataArray.desc.push(allCards[i].description);
    dataArray.date.push(allCards[i].dueDate);
    dataArray.tags.push(allCards[i].tags);
    dataArray.color.push(allCards[i].color);
    dataArray.repeat.push(allCards[i].repeatingDays);
    dataArray.fav.push(allCards[i].isFavorite);
    dataArray.arch.push(allCards[i].isArchive);
  }
};
getAllData(maxCardsQuantity);
// berem chast kartochek iz peremenoj allCards
const getPart = (array = allCards, start = 0, num = 1) => {
  return array.slice(start, num);
};

// peredajem moki v razmetku createBlockCard()
const generateHtmlCards = (cardsDataArray) => {
  const cards = cardsDataArray.map((abc) => {
    const card = createBlockCard(abc);
    return card;
  });
  return cards.join(``);
};

export const cardsHtmlString = generateHtmlCards(cardsStart);


let currentPos = 0;
const GAP = 8;
export const getMoreCards = () => {
  currentPos = currentPos + GAP;
  if (currentPos >= allCards.length - 1) {
    return ``;
  }
  const data = getPart(allCards, currentPos, currentPos + GAP);
  const htmlString = generateHtmlCards(data);
  return htmlString;
};

// -------------FILTERS-------------

export const tasksFiltersQuantity = [
  {
    get all() {
      return maxCardsQuantity;
    }

  },
  {
    get favorites() {
      let result = dataArray.fav.filter((isTrue) => isTrue === true);
      return result.length;
    },

  },
  {
    get repeating() {
      // eto funkcija prosto kak zaglushka, k nei ishe vrnus'
      let result = [];
      for (let i = 0; i < maxCardsQuantity; i++) {
        if (dataArray.repeat[i].we === true) {
          result.push(dataArray.repeat[i].we);
        }
      }
      return result.length;
    },

  },
  {
    get tags() {
      return dataArray.tags[0].size;
    },


  },
  {
    get archive() {
      let result = dataArray.arch.filter((isTrue) => isTrue === true);
      return result.length;
    },

  }];


