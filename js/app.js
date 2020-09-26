import {templateNavbar} from '../templates/navbar.js';
import {templateFooter} from '../templates/footer.js';

const main = () => {
  const formRegister = document.querySelector('#form-register');
  formRegister.addEventListener('submit', sendData);

  document.querySelector('.header-nav').innerHTML = templateNavbar;
  document.querySelector('.main').innerHTML = templateFooter;

  const countries = ['Spain', 'Portugal', 'France', 'Italy'];
  let countriesSelect = '<option></option>';
  countries.forEach((item) => (countriesSelect += `<option>${item}</option>`));

  formRegister.querySelector('#exampleSelect').innerHTML = countriesSelect;
};

const sendData = (event) => {
  event.preventDefault();
  const data = {};
  const formRegister = document.querySelector('#form-register');
  const inputsForm = [...formRegister.querySelectorAll('.form-input')];

  data.gender = inputsForm.filter((item) => item.checked)[0].value;
  data.name = inputsForm[3].value;
  data.surname = inputsForm[4].value;
  data.email = inputsForm[5].value;
  data.phone = inputsForm[6].value;
  data.username = inputsForm[7].value;
  data.password = inputsForm[8].value;
  data.confirmPassword = inputsForm[9].value;
  data.apiKey = inputsForm[10].value;
  data.country = inputsForm[11].value;
  data.textArea = inputsForm[12].value;
  data.aceptTerms = inputsForm[13].checked;

  console.log(data);
};

document.addEventListener('DOMContentLoaded', main);
