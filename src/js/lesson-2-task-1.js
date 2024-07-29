'use strict';

/**
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

const URL = `https://66a6506d23b29e17a1a25325.mockapi.io/books`;

/**
 * Read (GET)
 */

function fetchBooks() {
  return fetch(`${URL}/books`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}

fetchBooks()
  .then(books => console.log('Масив книжок', books))
  .catch(error => console.error(error));

function fetchBookById(bookId) {}

fetchBooks();
fetchBookById(2);
fetchBookById(4);

/**
 * Create (POST)
 */

function addBook(book) {}

addBook({
  title: 'Тестова книга з CSS',
  author: 'Я',
  genres: ['CSS'],
  Rating: 9,
})
  .then(book => {
    console.log('Прийшла відповідь від бекенда можна малювати');
    console.log(book);
  })
  .catch(error => console.log(error));

addBook({
  title: 'Тестова книга з HTML',
  author: 'Я',
  genres: ['HTML'],
  Rating: 7,
}).then(book => {
  console.log('Прийшла відповідь від бекенда можна малювати');
  console.log(book);
});

/**
 * Update (PUT/PATCH)
 */

function updateBookById(update, bookId) {}

// updateBookById({ title: "Велика нова книга по NODEJS" }, 19);
// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: "Манго" }, 17);

/**
 * Delete (DELETE)
 */

function removeBook(bookId) {}

// removeBook(15);
// removeBook(14);
