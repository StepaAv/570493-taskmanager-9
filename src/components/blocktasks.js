import {createBlockLoadMore} from './blockloadmore.js';
import {createBlockCardEdit} from './blockcardedit.js';
import {createBlockFilters} from './blockfilters.js';
import {allCards} from './data.js';


// soberajem razmetku v blok 'board'
export const createBlockTasks = () => {
  return `

       <section class="board container">
		${createBlockFilters()}
       <div class="board__tasks">
        ${createBlockCardEdit()}
        ${allCards}
       </div>
        ${createBlockLoadMore()}
       </section>`;
};


