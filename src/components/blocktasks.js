import {createBlockFilters} from './blockfilters.js';
import {createBlockLoadMore} from './blockloadmore.js';
import {createBlockCardEdit} from './blockcardedit.js';
import {allCardsBlock} from './data.js';


// soberajem razmetku v blok 'board'
export const createBlockTasks = () => {
  return `

       <section class="board container">
        ${createBlockFilters()}
       <div class="board__tasks">
        ${createBlockCardEdit()}
        ${allCardsBlock}
       </div>
        ${createBlockLoadMore()}
       </section>`;
};

