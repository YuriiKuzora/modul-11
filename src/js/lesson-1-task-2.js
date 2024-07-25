'use strict';

// https://pixabay.com/api/

function getPicturesByQuery(query) {
  const API_KEY = '45112912-6770c0bfd04bfeab336421b9c';

  return fetch(
    `https://pixabay.com/api?key=${API_KEY}&q=${query}`
  ).then(res => {
    console.log(res);

    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

getPicturesByQuery('blue+car')
  .then(data => console.log(data))
  .catch(error => console.error(error));
