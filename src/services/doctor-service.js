import { myAxios } from './helper';

export const doctorSignup = (doctor) => {
  return myAxios
    .post('api/v1/doctors/signup', doctor)
    .then((response) => response.data);
};

export const doctorLogin=(loginDetails)=>{
    return myAxios.post('api/v1/doctors/login',loginDetails).then((response)=>response.data);
}
// export const doctorActiveUpdate=(id)=>{
//   return myAxios.patch('api/v1/doctors/setActive',{id}).then((response)=>response.data);
// }
export const doctorsData = () => {
  return myAxios.get('/api/v1/doctors')
    .then(response => {
      if (response.status === 200 && response.data && Array.isArray(response.data.data.doc)) {
        return response.data.data.doc;
      } else {
        throw new Error('Unexpected response format');
      }
    })
    .catch(error => {
      console.error('Error fetching doctors data:', error);
      throw error;
    });
};


export const doctorLogout = (next) => {
  return myAxios
    .post('api/v1/doctors/logout')
    .then((response) => {
      response.data;
      location.reload(true);
      next();
    })
};


