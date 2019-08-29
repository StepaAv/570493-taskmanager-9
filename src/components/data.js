import {createBlockCard} from './blockcards.js';

let cardsQuantity = 15;
let favoritesBucket = [];
let tasksContainer = ``;
let isFavoriteTrueArr = [];
let isRepeatingTrueArr = [];
let tagsContainer = ``;
let isArchivedTrueArr = [];


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


// sozdajem mnogo CreateBlockCard s danymi iz createTask
export const createBlockCards = (amount) => {
  let repeateCards = ``;
  for (let i = 0; i < amount; i++) {
  	tasksContainer = createTasks();
    repeateCards += createBlockCard(tasksContainer.description, tasksContainer.dueDate,
        tasksContainer.tags, tasksContainer.color, tasksContainer.repeatingDays, tasksContainer.isFavorite);
    // 2. zapihivajem v X masiv, argumenty is createTasks()
    favoritesBucket.push(tasksContainer);
  }
  for (let i = 0; i < amount; i++) {
    // zapihivajem v massiv vse TRUE znachenija 'favorites'
    if (favoritesBucket[i].isFavorite === true) {
      isFavoriteTrueArr.push(favoritesBucket[i].isFavorite);
    }
    // zapihivajem v massiv vse TRUE znachenija 'repeatingDays.we'
    if (favoritesBucket[i].repeatingDays.we === true) {
      isRepeatingTrueArr.push(favoritesBucket[i].repeatingDays.we);
    }
    if (favoritesBucket[i].isArchive === true) {
      isArchivedTrueArr.push(favoritesBucket[i].isArchive);
    }
  }
  tagsContainer = tasksContainer.tags.size;

  return repeateCards;
};

export const allCardsBlock = createBlockCards(cardsQuantity);

// -------------FILTERS-------------

export const tasksFiltersQuantity = [
  {
    get all() {
      return cardsQuantity;
    }

  },
  {
    get favorites() {
      return isFavoriteTrueArr.length;
    },

  },
  {
    get repeating() {
      return isRepeatingTrueArr.length;
    },

  },
  {
    get tags() {
      return tagsContainer;
    },


  },
  {
    get archive() {
      return isArchivedTrueArr.length;
    },

  }];


