const dataBase = window.localStorage.getItem('users')
  ? JSON.parse(window.localStorage.getItem('users'))
  : [];

export const saveUser = (user) => {
  dataBase.push(user);
  window.localStorage.setItem('users', JSON.stringify(dataBase));
};

export const getUser = (name) => {
  return dataBase.find((item) => item.name.toLowerCase() === name.toLowerCase());
};

export const getUserByEmail = (email) => {
  return dataBase.find((item) => item.email.toLowerCase() === email.toLowerCase());
};
