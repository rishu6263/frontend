import React from 'react';
import { Link } from 'react-router-dom';
import loginimage from '../assets/images/eldery_treatment_05.jpg';

const Register = () => {

    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className="hidden sm:flex items-center justify-center">
          <img className="w-full h-full object-cover" src={loginimage} alt="Login" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 sm:p-8">
          <Link
            to='/doctor-register'
            className='p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300'
          >
            Doctor
          </Link>
          <Link
            to='/user-register'
            className='p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300'
          >
            Patient
          </Link>
        </div>
      </div>
    );
  };

export default Register