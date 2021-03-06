import {templateNavbar} from '../templates/navbar.js';
import {templateFooter} from '../templates/footer.js';
import {countries, regionsOfSpain, regionsOfPortugal} from './regionsConfig.js';
import {saveUser, getUserByEmail} from './dataBase.js';

function main() {
  const formRegister = document.querySelector('#form-register');
  const formLogin = document.querySelector('#form-login');
  const selectCountry = document.querySelector('#selectCountry');
  const selectRegion = document.querySelector('#selectRegion');

  document.querySelector('.header-nav').innerHTML = templateNavbar;
  document.querySelector('.main').innerHTML = templateFooter;

  if (formLogin) formLogin.addEventListener('submit', onClickLogin);

  if (formRegister) {
    formRegister.addEventListener('submit', sendUser);
    fillSelect(countries, selectCountry);
  }

  if (selectCountry) selectCountry.addEventListener('change', selectRegions);

  function fillSelect(data, selector) {
    let fillSelectHtml = '';
    data.forEach(
      (item) => (fillSelectHtml += `<option value="${item.id}">${item.name}</option>`)
    );
    selector.innerHTML = fillSelectHtml;
  }

  function selectRegions() {
    if (selectCountry.value === 'spain') {
      selectRegion.parentElement.classList.remove('nodisplay');
      fillSelect(regionsOfSpain, selectRegion);
    }
    if (selectCountry.value === 'portugal') {
      selectRegion.parentElement.classList.remove('nodisplay');
      fillSelect(regionsOfPortugal, selectRegion);
    }

    if (selectCountry.value === '' || selectCountry.value === 'other') {
      selectRegion.parentElement.classList.add('nodisplay');
    }
  }

  function sendUser(event) {
    event.preventDefault();
    const user = {};
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
    user.region = inputsForm[12].value;
    user.textArea = inputsForm[13].value;
    user.aceptTerms = inputsForm[14].checked;

    if (existUserMail(user.email)) {
      inputsForm[5].value = '';
      showSms('This email is already in use, choose another email');
    }

    if (user.password !== user.confirmPassword) {
      inputsForm[8].value = '';
      showSms('The password does not match');
    }

    if (user.password === user.confirmPassword && existUserMail(user.email) === false) {
      saveUser(user);
      window.location = 'login.html';
    }
  }

  function existUserMail(email) {
    if (getUserByEmail(email) !== undefined) return true;
    return false;
  }

  function onClickLogin(event) {
    event.preventDefault();
    const inputsLogin = [...formLogin.querySelectorAll('.form-input')];
    validateForm(inputsLogin);
    const userLog = {};
    userLog.email = inputsLogin[0].value;
    userLog.password = inputsLogin[1].value;

    const findUser = getUserByEmail(userLog.email);

    if (!findUser) {
      showSms('The data entry is not correct');
    } else if (findUser.password !== inputsLogin[1].value) {
      showSms('The data entry is not correct');
    } else {
      sessionStorage.setItem('email', userLog.email);
      window.location = 'user.html';
    }
  }

  function showSms(smsLog) {
    let sms = '';
    sms += `
    <div class="form-control-lg text-danger ">
      <p>${smsLog}</p>
    </div>`;

    if (formLogin) formLogin.querySelector('#sms').innerHTML = sms;
    if (formRegister) formRegister.querySelector('#sms').innerHTML = sms;
  }
}

const validateForm = (data) => {
  try {
    data.forEach((item) => {
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
