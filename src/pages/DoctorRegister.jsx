import React from 'react';
import { Link } from 'react-router-dom'; // Don't forget to import Link

import login_doctor from "../assets/images/doctor_register.jpg";

const DoctorRegister = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={login_doctor} alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        <div className='mt-4'>
          <span>Don't have account</span>
          <Link to='/DoctorAcount' className="ml-20 mt-4 bg-blue-600 hover:bg-blue-700 px-2 py-2 text-white uppercase rounded text-xs tracking-wider">
            Create Acount
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DoctorRegister;
