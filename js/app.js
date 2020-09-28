import {templateNavbar} from '../templates/navbar.js';
import {templateFooter} from '../templates/footer.js';
import {countries, regionsOfSpain, regionsOfPortugal} from './regionsConfig.js';

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
    setSelect(countries);
  }

  if (selectCountry) selectCountry.addEventListener('change', selectRegions);

  function setSelect(countries) {
    let countriesSelect = '<option></option>';
    countries.forEach(
      (item) => (countriesSelect += `<option value="${item.name}">${item.name}</option>`)
    );
    selectCountry.innerHTML = countriesSelect;
  }

  // Como no repetir esta funcion....

  function setSelectRegions(regions) {
    let countriesSelect = '';
    regions.forEach(
      (item) => (countriesSelect += `<option value="${item.name}">${item.name}</option>`)
    );
    selectRegion.innerHTML = countriesSelect;
  }

  function selectRegions() {
    console.log(selectCountry, selectCountry.selectedIndex);
    if (selectCountry.selectedIndex === 1) {
      selectRegion.parentElement.classList.remove('nodisplay');
      setSelectRegions(regionsOfSpain);
    }
    if (selectCountry.selectedIndex === 2) {
      selectRegion.parentElement.classList.remove('nodisplay');
      setSelectRegions(regionsOfPortugal);
    }
    if (selectCountry.selectedIndex === 0 || selectCountry.selectedIndex === 3) {
      selectRegion.parentElement.classList.add('nodisplay');
    }
  }

  function sendUser(event) {
    event.preventDefault();
    const user = {};
    // const formRegister = document.querySelector('#form-register');
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

    const dataBase = window.localStorage.getItem('users')
      ? JSON.parse(window.localStorage.getItem('users'))
      : [];

    dataBase.push(user);
    window.localStorage.setItem('users', JSON.stringify(dataBase));

    if (user.password === user.confirmPassword) {
      inputsForm.forEach((item) => (item.value = ''));
    } else {
      inputsForm[8].value = '';
      showSms('The password does not match');
    }

    if (inputsForm[8].value === inputsForm[9].value) window.location = 'login.html';
  }

  function onClickLogin(event) {
    event.preventDefault();
    const inputsLogin = [...formLogin.querySelectorAll('.form-input')];
    validateForm(inputsLogin);
    const userLog = {};
    userLog.name = inputsLogin[0].value;
    userLog.password = inputsLogin[1].value;

    // Sacar esto....
    const dataBase = window.localStorage.getItem('users')
      ? JSON.parse(window.localStorage.getItem('users'))
      : [];

    let findUser = dataBase.find(
      (item) => item.name.toLowerCase() === inputsLogin[0].value.toLowerCase()
    );

    // Sacar esto....
    if (!findUser) {
      showSms('The data entry is not correct');
    } else if (findUser.password !== inputsLogin[1].value) {
      showSms('The data entry is not correct');
    } else {
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

// https://plataforma.keepcoding.io/courses/dearrollo-frontend-javasscript-9/lectures/24503547
// 3.20

// https://plataforma.keepcoding.io/courses/dearrollo-frontend-javasscript-9/lectures/24503547
// min 34
