import {templateNavbar} from '../templates/navbar.js';
import {templateFooter} from '../templates/footer.js';

const main = () => {
  const btnSend = document.querySelector('#btn-send');
  if (btnSend) btnSend.addEventListener('click', onClick);

  document.querySelector('.header-nav').innerHTML = templateNavbar;
  document.querySelector('.footer-page').innerHTML = templateFooter;
};

const onClick = () => {
  console.log('ver');
};

document.addEventListener('DOMContentLoaded', main);
