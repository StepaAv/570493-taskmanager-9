import {createBlockFilters} from './blockfilters.js';
import {createBlockCard} from './blockcards.js';
import {createBlockLoadMore} from './blockloadmore.js';

const CARD_QUANTITY = 3;


// soberajem razmetku v blok 'board'
export const createBlockTasks = () => {
  return `

       <section class="board container">
        ${createBlockFilters()}
       <div class="board__tasks">
        ${createBlockCard(task.description, task.dueDate, task.tags)}
       </div>
        ${createBlockLoadMore()}
       </section>`;
};




const task = {
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
};