export const saveUser = (user) => {
  const dataBase = window.localStorage.getItem('users')
    ? JSON.parse(window.localStorage.getItem('users'))
    : [];
  dataBase.push(user);
  window.localStorage.setItem('users', JSON.stringify(dataBase));
};

export const getUser = (name) => {
  return dataBase.find((item) => item.name.toLowerCase() === name.toLowerCase());
};
