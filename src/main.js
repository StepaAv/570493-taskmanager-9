import {createBlockMenu} from './components/blockmenu.js';
import {createBlockSearch} from './components/blocksearch.js';
import {createBlockTasks} from './components/blocktasks.js';
import {assemlbeMoreCards} from './components/data.js';

const mainControlBlock = document.querySelector(`.main__control`);
const mainMainBlock = document.querySelector(`.main`);

const renderBlocks = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderBlocks(mainControlBlock, createBlockMenu(), `beforeend`);
renderBlocks(mainMainBlock, createBlockSearch(), `beforeend`);
renderBlocks(mainMainBlock, createBlockTasks(), `beforeend`);

// ---------- END OF RENDERiNG ------------
export const loadMoreBtn = document.querySelector(`.load-more`);

loadMoreBtn.addEventListener(`click`, assemlbeMoreCards);

