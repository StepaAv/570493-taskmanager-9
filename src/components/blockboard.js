import {createBlockFilters} from './blockfilters.js';
import {createBlockCard} from './blockcards.js';
import {createBlockLoadMore} from './blockloadmore.js';

// soberajem razmetku v blok 'board'
export const createBlockBoard = () => {
  return `
       <section class="board container">
       ${createBlockFilters()}
       ${createBlockCard(3)}
       ${createBlockLoadMore()}
       </section>
`;
};
