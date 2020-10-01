import {URL_API, API_KEY} from '../js/config.js';
import {getUser} from './dataBase.js';

function main() {
  let page = 1;
  const btnApiPopularMovies = document.querySelector('.btn-popular-movies');
  const prevPageBtn = document.querySelector('#prev-pagination');
  const nextPageBtn = document.querySelector('#next-pagination');

  if (btnApiPopularMovies) btnApiPopularMovies.addEventListener('click', getMovies);
  if (prevPageBtn) prevPageBtn.addEventListener('click', () => pagination(-1));
  if (nextPageBtn) nextPageBtn.addEventListener('click', () => pagination(1));

  function pagination(flag) {
    page += flag;
    getMovies();
    document.querySelector('#prev-pagination').classList.remove('hiddenBtn');
    console.log(page);
    if (page === 1) document.querySelector('#prev-pagination').classList.add('hiddenBtn');
  }

  function getMovies() {
    let url = URL_API + API_KEY;
    if (page > 1) url += `&page=${page}`;

    fetch(url)
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
