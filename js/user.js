import {URL_API, API_KEY} from '../js/config.js';

const btnApi = document.querySelector('.btn-info');

btnApi.addEventListener('click', () => {
  fetch(URL_API + API_KEY)
    .then((response) =>
      response.ok ? Promise.resolve(response) : Promise.reject(response)
    )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => console.log(data));
});
