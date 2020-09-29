import {URL_API, API_KEY} from '../js/config.js';
import {getUser} from './dataBase.js';

function main() {
  const btnApi = document.querySelector('.btn-info');

  if (btnApi) btnApi.addEventListener('click', onClickMovies);

  function onClickMovies() {
    fetch(URL_API + API_KEY)
      .then((response) =>
        response.ok ? Promise.resolve(response) : Promise.reject(response)
      )
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => changeDom(data))
      .catch((error) => console.error(error));
  }

  function changeDom(data) {
    btnApi.classList.add('nodisplay');
    if (!data) return;

    let tableHtml = '';

    console.log(data.results);
    let movies = data.results;
    movies.forEach((item) => {
      tableHtml += `
          <tr class="table-warning">
            <td>${item.original_title}</td>
            <td><a href="${item.poster_path}">${item.poster_path}</a></td>
            <td>${item.id}</td>
          </tr>
        `;
    });
    document.querySelector('table.table-movies').classList.remove('nodisplay');
    document.querySelector('table.table-movies tbody').innerHTML = tableHtml;
  }
}

document.addEventListener('DOMContentLoaded', main);
