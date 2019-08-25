import {createBlockFilters} from './blockfilters.js';
import {createBlockLoadMore} from './blockloadmore.js';
import {createBlockCards} from './data.js';
import {CARD_QUANTITY} from './data.js';




// soberajem razmetku v blok 'board'
export const createBlockTasks = () => {
  return `

       <section class="board container">
        ${createBlockFilters()}
       <div class="board__tasks">
        ${createBlockCards(CARD_QUANTITY)}
       </div>
        ${createBlockLoadMore()}
       </section>`;
};

