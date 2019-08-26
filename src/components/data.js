import {createBlockCard} from './blockcards.js';

export const CARD_QUANTITY = 8;


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

// 1. sozdajem pustoj masiv X
let favoritesBucket = [];
let arr3 = [];
let tasksContainer = ``;
// sozdajem mnogo CreateBlockCard s danymi iz createTask
const createBlockCards = (amount) => {
  let repeateCards = ``;
  for (let i = 0; i < amount; i++) {
  	tasksContainer = createTasks();
    repeateCards += createBlockCard(tasksContainer.description, tasksContainer.dueDate,
        tasksContainer.tags, tasksContainer.color, tasksContainer.repeatingDays, tasksContainer.isFavorite);
    // 2. zapihivajem v X masiv, argumenty is createTasks()
    favoritesBucket.push(tasksContainer);
  };
  console.log(favoritesBucket);
  console.log(favoritesBucket[0].isFavorite);
  return repeateCards;
};


export const blockCards = createBlockCards(CARD_QUANTITY);

// -------------FILTERS-------------


// const tasksFilters = [
// {
//   title: 'filterAll',
//   get count() {

//   }
// },
// {
//   title: 'filterFavorites',
//   count: 'blabla'
// },
// {
//   title: 'filterRepeating',
//   count: 'blabla'
// },
// {
//   title: 'filterTags',
//   count: 'blabla'

// },
// {
//   title: 'filterArchive',
//   count: 'blabla'
// }];

