'use strict';

// const options = {
//   method: 'GET',
// };

// fetch('https://jsonplaceholder.typicode.com/users', {
//   headers: {
//     Accept: 'application/json',
//   },
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//     console.log(data);
//   })
//   .catch(error => {
//     // Error handling
//     console.log(error);
//   });

// --------------------------------------------------

// let globalVariable; // undefined

// // Виконуємо HTTP-запит
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     console.log('users inside then callback: ', users);

//     // Асинхронно записуємо результат запиту в зовнішню змінну
//     globalVariable = users;

//     // Усередині колбека методу then усе добре
//     console.log('globalVariable inside fetch callback: ', globalVariable);
//   });

// // Зовні колбека методу then у синхронному коді немає доступу до даних асинхронної відповіді бекенда
// console.log('globalVariable outside fetch: ', globalVariable); // undefined

// --------------------------------------------------

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: 'name',
});

console.log(searchParams.toString());

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;

console.log(url);
