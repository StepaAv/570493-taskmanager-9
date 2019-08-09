import {createBlockMenu} from './components/blockmenu.js';
import {createBlockSearch} from './components/blocksearch.js';
// import {createBlockFilters} from './components/blockfilters.js';
// import {createBlockCard} from './components/blockcards.js';
// import {createBlockCardControl} from './components/blockcardcontrol.js';
// import {createBlockLoadMore} from './components/blockloadmore.js';
import {createBlockBoard} from './components/blockboard.js';

const mainControlBlock = document.querySelector(`.main__control`);
const mainMainBlock = document.querySelector(`.main`);


const renderBlocks = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

renderBlocks(mainControlBlock, createBlockMenu(), `beforeend`);
renderBlocks(mainMainBlock, createBlockSearch(), `beforeend`);
renderBlocks(mainMainBlock, createBlockBoard(), `beforeend`);

// mainControlBlock.insertAdjacentHTML(`beforeend`, createBlockMenu());
// mainMainBlock.insertAdjacentHTML(`beforeend`, createBlockSearch());
// mainMainBlock.insertAdjacentHTML(`beforeend`, createBlockBoard());


