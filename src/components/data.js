import {createBlockCard} from './blockcards.js';

const maxCardsQuantity = 7;
const cardsGup = 8;


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

let allData = [];
const dataArray = {
  desc: [],
  date: [],
  tags: [],
  color: [],
  repeat: [],
  fav: [],
  arch: [],
};

const getAllData = (repeat) => {
  for (let i = 0; i < repeat; i++) {
    allData.push(createTasks());
  }
  for (let i = 0; i < repeat; i++) {
    dataArray.desc.push(allData[i].description);
    dataArray.date.push(allData[i].dueDate);
    dataArray.tags.push(allData[i].tags);
    dataArray.color.push(allData[i].color);
    dataArray.repeat.push(allData[i].repeatingDays);
    dataArray.fav.push(allData[i].isFavorite);
    dataArray.arch.push(allData[i].isArchive);
  }
};
getAllData(maxCardsQuantity + cardsGup);

export let allCards = ``;
export const assembleBlockCards = (repeat) => {
  for (let i = 0; i < repeat; i++) {
    allCards += createBlockCard(dataArray.desc[i], dataArray.date[i], dataArray.tags[i], dataArray.color[i],
        dataArray.repeat[i]);
  }
};

export const assemlbeMoreCards = () => {
  for (let i = maxCardsQuantity; i < maxCardsQuantity + cardsGup; i++) {
    allCards += createBlockCard(dataArray.desc[i], dataArray.date[i], dataArray.tags[i], dataArray.color[i],
        dataArray.repeat[i]);
  }
};
assembleBlockCards(maxCardsQuantity);

// assemlbeMoreCards();


// -------------FILTERS-------------

export const tasksFiltersQuantity = [
  {
    get all() {
      return maxCardsQuantity + cardsGup;
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
      for (let i = 0; i < maxCardsQuantity + cardsGup; i++) {
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


