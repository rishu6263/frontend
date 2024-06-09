import { myAxios } from './helper';

export const donateBlood = (details) => {
  return myAxios
    .post('api/v1/blood/donate', details)
    .then((response) => response.data);
};

export const requestBlood = (details) => {
  return myAxios
    .post('api/v1/blood/recieve', details)
    .then((response) => response.data);
};

export const getAllDonors = () => {
  return myAxios
    .get('api/v1/blood/allDonors')
    .then((response) => {
      return response.data
  });
};
export const getAllReceivers = () => {
  return myAxios
    .get('api/v1/blood/allReciepants')
    .then((response) => {
      return response.data
  });
};
