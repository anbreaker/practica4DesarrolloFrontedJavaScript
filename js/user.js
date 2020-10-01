import {URL_API, API_KEY} from '../js/config.js';
import {getUser} from './dataBase.js';

function main() {
  const btnApiPopularMovies = document.querySelector('.btn-popular-movies');

  if (btnApiPopularMovies) btnApiPopularMovies.addEventListener('click', getMovies);

  function getMovies() {
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
    btnApiPopularMovies.classList.add('nodisplay');
    if (!data) return;
    console.log(data.results);

    let tableHtml = '';
    let movies = data.results;
    movies.forEach((item) => {
      tableHtml += `
          <tr class="table-warning">
            <td>${item.original_title}</td>
            <td><a href="https://www.themoviedb.org/movie/${item.id}" 
                   target="_blank">https://www.themoviedb.org/movie/${item.id}</a>
            </td>
          </tr>
        `;
    });

    document.querySelector('#pagination').classList.remove('nodisplay');
    document.querySelector('.table-movies').classList.remove('nodisplay');
    document.querySelector('.table-movies').innerHTML = tableHtml;
  }
}

document.addEventListener('DOMContentLoaded', main);
