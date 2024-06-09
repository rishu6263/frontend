const DOCTOR_KEY = 'doctor_data';
export const isDoctorLoggedIn = () => {
  let data = localStorage.getItem(DOCTOR_KEY);
  return data != null;
};

export const doctorDoLogin = (data, next) => {
  localStorage.setItem(DOCTOR_KEY, JSON.stringify(data));
  next();
};

export const doDoctorLogout = (next) => {
  localStorage.removeItem(DOCTOR_KEY);
  next();
};

export const getCurrentDoctorDetail = () => {
  if (isDoctorLoggedIn()) {
    return JSON.parse(localStorage.getItem(DOCTOR_KEY)).data;
  } else {
    return false;
  }
};
export const checkAtive = () => {
  if (isDoctorLoggedIn()) return true;
  else return false;
};