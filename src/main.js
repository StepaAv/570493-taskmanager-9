import {createBlockMenu} from './components/blockmenu.js';
import {createBlockSearch} from './components/blocksearch.js';
import {createBlockTasks} from './components/blocktasks.js';
import {getMoreCards} from './components/data.js';
import {cardsHtmlString} from './components/data.js';

const mainControlBlock = document.querySelector(`.main__control`);
const mainMainBlock = document.querySelector(`.main`);

const renderBlocks = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderBlocks(mainControlBlock, createBlockMenu(), `beforeend`);
renderBlocks(mainMainBlock, createBlockSearch(), `beforeend`);
renderBlocks(mainMainBlock, createBlockTasks(), `beforeend`);

const loadMoreBtn = document.querySelector(`.load-more`);
const cardsSummonSpot = document.querySelector(`.board__tasks`);

renderBlocks(cardsSummonSpot, cardsHtmlString, `beforeend`);

const loadMoreCards = () => {
  const html = getMoreCards();
  renderBlocks(cardsSummonSpot, html, `beforeend`);
  loadMoreBtn.style.display = `none`;
};

loadMoreBtn.addEventListener(`click`, loadMoreCards);

