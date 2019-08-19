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
        ${createBlockCard(CARD_QUANTITY)}
       </div>
        ${createBlockLoadMore()}
       </section>

`;
};
