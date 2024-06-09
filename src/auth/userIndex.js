
const USER_KEY = 'user_data';
export const isUserLoggedIn = () => {
  let data = localStorage.getItem(USER_KEY);
  return data != null;
};

export const doUserLogin = (data, next) => {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
  next();
};

export const doUserLogout = (next) => {
  localStorage.removeItem(USER_KEY);
  next();
};

export const getCurrentUserDetail = () => {
  if (isUserLoggedIn()) {
    return JSON.parse(localStorage.getItem(USER_KEY)).data.user;
  } else {
    return false;
  }
};