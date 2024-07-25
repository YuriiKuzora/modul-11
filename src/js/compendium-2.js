'use strict';

const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

fetchUsersBtn.addEventListener('click', () => {
  fetchUsers()
    .then(users => renderUsers(users))
    .catch(error => console.log(error));
});

function fetchUsers() {
  const searchParams = new URLSearchParams({
    _limit: 3,
    _sort: 'name',
  });

  const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(users) {
  const markup = users
    .map(user => {
      return `<li class="user-item">
	          <p><b>Name</b>: ${user.name}</p>
	          <p><b>Email</b>: ${user.email}</p>
	          <p><b>Company</b>: ${user.company.name}</p>
	        </li>`;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', markup);
}
