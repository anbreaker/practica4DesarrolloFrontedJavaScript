import {templateNavbar} from '../templates/navbar.js';
import {templateFooter} from '../templates/footer.js';

const main = () => {
  const btnRegister = document.querySelector('#btn-register');
  if (btnRegister) btnRegister.addEventListener('click', onClickRegister);

  const customCheck = document.getElementById('customCheck1');
  if (customCheck) customCheck.checked = 0;

  document.querySelector('.header-nav').innerHTML = templateNavbar;
  document.querySelector('.main').innerHTML = templateFooter;
};

const onClickRegister = () => {
  const formRegister = document.querySelector('#form-register');
  const inputsForm = [...formRegister.querySelectorAll('input')];

  console.log(inputsForm[11].checked);
  // inputsForm.forEach((item) => console.log(item));
  // recorrer(inputsForm);
};

// const recorrer = (data) => {
//   data.forEach(item => console.log(item.);)
// }

document.addEventListener('DOMContentLoaded', main);
