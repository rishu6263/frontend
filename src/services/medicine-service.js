import { myAxios } from './helper';

export const getAllMedicine = () => {
  return myAxios
    .get('api/v1/medicine')
    .then((response) => response.data);
};