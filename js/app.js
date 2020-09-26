import {templateNavbar} from '../templates/navbar.js';
import {templateFooter} from '../templates/footer.js';

const main = () => {
  const formRegister = document.querySelector('#form-register');
  const customCheck = document.getElementById('customCheck1');

  if (customCheck) customCheck.checked = 0;

  formRegister.addEventListener('submit', sendData);

  document.querySelector('.header-nav').innerHTML = templateNavbar;
  document.querySelector('.main').innerHTML = templateFooter;
};

const sendData = (event) => {
  event.preventDefault();
  const formRegister = document.querySelector('#form-register');

  validateForm(formRegister);
};

const validateForm = (formRegister) => {
  const inputsForm = [...formRegister.querySelectorAll('.form-input')];
  // console.log(inputsForm[11].checked);
  console.log(inputsForm);
  inputsForm.forEach((item) => console.log(item.value));

  try {
    inputsForm.forEach((item) => {
      if (!item.value) {
        throw new Error(`${item.id} invalid`);
      }
    });
    return true;
  } catch (error) {
    console.log(error);
    // formRegister.querySelector('.sms').innerHTML = 'sms';
    return false;
  }
};

document.addEventListener('DOMContentLoaded', main);
