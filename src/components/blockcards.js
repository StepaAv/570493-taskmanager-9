import {createBlockCardControl} from './blockcardcontrol.js';


export const createBlockCard = (description = `lol`, dueDate, tags, color = `black`) => {
  return `
<article class="card card--${color}">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                ${createBlockCardControl()}
              </div>
                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>
                <div class="card__textarea-wrap">
                  <p class="card__text">${description}</p>
                </div>
                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${new Date(dueDate).toDateString()}</span>
                          <span class="card__time">11:15 PM</span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        <span class="card__hashtag-inner">
                          <span class="card__hashtag-name">
                            #${tags}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
  `;
};

// data.js

// const task = {
//   description: [
//     `Изучить теорию`,
//     `Сделать домашку`,
//     `Пройти интенсив на соточку`,
//   ][Math.floor(Math.random() * 3)],

//   dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,

//   tags: new Set([
//     `cinema`,
//     `entertainment`,
//     `myself`,
//     `cinema`,
//   ]),

//     repeatingDays: {
//     'mo': false,
//     'tu': false,
//     'we': Boolean(Math.round(Math.random())),
//     'th': false,
//     'fr': false,
//     'sa': false,
//     'su': false,
//   },

//     color: [
//     `black`,
//     `yellow`,
//     `blue`,
//     `green`,
//     `pink`,
//   ][Math.floor(Math.random() * 5)],
// };
