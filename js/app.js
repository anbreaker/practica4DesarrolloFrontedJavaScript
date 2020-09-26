import {templateNavbar} from '../templates/navbar.js';
import {templateFooter} from '../templates/footer.js';

const main = () => {
  const formRegister = document.querySelector('#form-register');

  document.querySelector('.header-nav').innerHTML = templateNavbar;
  document.querySelector('.main').innerHTML = templateFooter;

  if (formRegister) {
    formRegister.addEventListener('submit', senduser);
    const countries = ['Spain', 'Portugal', 'France', 'Italy'];
    let countriesSelect = '<option></option>';
    countries.forEach((item) => (countriesSelect += `<option>${item}</option>`));

    formRegister.querySelector('#exampleSelect').innerHTML = countriesSelect;
  }
};

const senduser = (event) => {
  event.preventDefault();
  const user = {};
  const formRegister = document.querySelector('#form-register');
  const inputsForm = [...formRegister.querySelectorAll('.form-input')];
  validateForm(inputsForm);

  user.gender = inputsForm.filter((item) => item.checked)[0].value;
  user.name = inputsForm[3].value;
  user.surname = inputsForm[4].value;
  user.email = inputsForm[5].value;
  user.phone = inputsForm[6].value;
  user.username = inputsForm[7].value;
  user.password = inputsForm[8].value;
  user.confirmPassword = inputsForm[9].value;
  user.apiKey = inputsForm[10].value;
  user.country = inputsForm[11].value;
  user.textArea = inputsForm[12].value;
  user.aceptTerms = inputsForm[13].checked;

  const dataBase = window.localStorage.getItem('users')
    ? JSON.parse(window.localStorage.getItem('users'))
    : [];

  dataBase.push(user);

  window.localStorage.setItem('users', JSON.stringify(dataBase));
  console.log(user);
};

const validateForm = (inputsForm) => {
  try {
    console.log('entra aqui');
    inputsForm.forEach((item) => {
      if (!item.value) {
        throw new Error(`Field not valid ${item}`);
      }
    });
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

document.addEventListener('DOMContentLoaded', main);

// https://plataforma.keepcoding.io/courses/dearrollo-frontend-javasscript-9/lectures/24503547
// min 30

// https://plataforma.keepcoding.io/courses/dearrollo-frontend-javasscript-9/lectures/24335431
// hora 3.52
