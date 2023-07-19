// • функция register - принимает почту и пароль, отправляет запрос регистрации на /signup
export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = ( password, email ) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
  .then((response => response.json()))
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};

// • функция login - принимает почту и пароль, отправляет запрос авторизации на /signin . В ответ сервер вернет jwt, который нужно сохранить в localStorage
export const login = ( password, email ) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
  .then((response => response.json()))
  .then((data) => {
    // console.log(response)
    if (data.token){
      localStorage.setItem('jwt', data.token);
      return data;
    }
  })
  .catch(err => console.log(err))
};

// • функция checkToken - принимает jwt, отправляет запрос на /users/me и возвращает данные пользователя
export const checkToken = ( jwt ) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${jwt}`
    }
  })
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.log(err))
} 