import {createBlockMenu} from './components/blockmenu.js';
import {createBlockSearch} from './components/blocksearch.js';
import {createBlockTasks} from './components/blocktasks.js';

// jesli hidden kards dobavliaju cerez import, to karty ne priachutsia
// import {hiddenCards} from './components/data.js'
let hiddenCards = 8;

const mainControlBlock = document.querySelector(`.main__control`);
const mainMainBlock = document.querySelector(`.main`);

const renderBlocks = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderBlocks(mainControlBlock, createBlockMenu(), `beforeend`);
renderBlocks(mainMainBlock, createBlockSearch(), `beforeend`);
renderBlocks(mainMainBlock, createBlockTasks(), `beforeend`);

// ---------- END OF RENDERiNG ------------
const allCards = document.querySelectorAll(`.card`);
const loadMoreBtn = document.querySelector(`.load-more`);
const allCardsArray = [...allCards];

// priachet lishnije kartochki
(() => {
  for (let i = hiddenCards; i < allCardsArray.length; i++) {
    allCardsArray[i].style.display = `none`;
  }
})();

// pokazyvajet ostalnyje kartochki i priachet knopku
const showMoreCards = () => {
  for (let i = hiddenCards; i < allCardsArray.length; i++) {
    allCardsArray[i].style.display = `block`;
  }
  loadMoreBtn.style.display = `none`;
};

loadMoreBtn.addEventListener(`click`, showMoreCards);
