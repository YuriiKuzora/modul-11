'use strict';

// https://jsonplaceholder.typicode.com/

const list = document.querySelector('.todo-list');

const createLiMarkup = ({ completed, title }) =>
  `<li class="${completed ? 'done' : 'in-progress'}">${title}</li>`;

const createListMarkup = liArr => liArr.map(createLiMarkup).join('');

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  })
  .then(data => {
    const listMarkup = createListMarkup(data);
    list.insertAdjacentHTML('beforeend', listMarkup);
  })
  .catch(error => console.error(error));
