export const createBlockFilters = () => {
  return `
  <section class="main__filter filter container">
        <input
          type="radio"
          id="filter__all"
          class="filter__input visually-hidden"
          name="filter"
          checked
        />
        <label for="filter__all" class="filter__label">
          All <span class="filter__all-count">13</span></label
        >
        <input
          type="radio"
          id="filter__overdue"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__overdue" class="filter__label"
          >Overdue <span class="filter__overdue-count">0</span></label
        >
        <input
          type="radio"
          id="filter__today"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__today" class="filter__label"
          >Today <span class="filter__today-count">0</span></label
        >
        <input
          type="radio"
          id="filter__favorites"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__favorites" class="filter__label"
          >Favorites <span class="filter__favorites-count">1</span></label
        >
        <input
          type="radio"
          id="filter__repeating"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__repeating" class="filter__label"
          >Repeating <span class="filter__repeating-count">1</span></label
        >
        <input
          type="radio"
          id="filter__tags"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__tags" class="filter__label"
          >Tags <span class="filter__tags-count">1</span></label
        >
        <input
          type="radio"
          id="filter__archive"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__archive" class="filter__label"
          >Archive <span class="filter__archive-count">115</span></label
        >
      </section>
            <section class="board container">
        <div class="board__filter-list">
          <a href="#" class="board__filter">SORT BY DEFAULT</a>
          <a href="#" class="board__filter">SORT BY DATE up</a>
          <a href="#" class="board__filter">SORT BY DATE down</a>
        </div>`;
};
