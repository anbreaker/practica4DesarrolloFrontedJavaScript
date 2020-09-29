const dataBase = window.localStorage.getItem('users')
  ? JSON.parse(window.localStorage.getItem('users'))
  : [];

export const saveUser = (user) => {
  dataBase.push(user);
  window.localStorage.setItem('users', JSON.stringify(dataBase));
};

export const getUser = (name) => {
  const user = dataBase.find((item) => item.name.toLowerCase() === name.toLowerCase());
  return user;
};
