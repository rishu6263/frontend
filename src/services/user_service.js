import { myAxios } from './helper';

export const userSignup = (user) => {
  return myAxios
    .post('api/v1/users/signup', user)
    .then((response) => response.data)
};

export const userLogin = (data) => {
  return myAxios
    .post('/api/v1/users/login', data)
    .then((response) => response.data)
    .catch((error=>console.log(error)))
};
export const userLogout = (next) => {
  return myAxios
    .post('api/v1/users/logout')
    .then((response) => {
      response.data;
      location.reload(true);
      next();
    })
};
