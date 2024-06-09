import React from 'react';
import { isDoctorLoggedIn } from '../auth/doctorIndex';

const ClinicAppointment = ({ location, price, timing, verified }) => {
 

  return (
    <div className="flex flex-col space-y-4 border border-gray-200 rounded-lg p-6 bg-white shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-xl font-bold text-gray-800">Clinic Appointment</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <div className="flex items-center space-x-2">
        <span className="text-green-500 text-lg font-bold">₹{price}</span>
        <span className="text-sm text-gray-600">FREE</span>
      </div>
      <p className="text-sm text-gray-600">{timing}</p>
      {verified && (
        <p className="text-sm text-green-500">
          <span className="mr-1">Max. 15 mins wait +</span> Verified details
        </p>
      )}
      <div className='flex gap-2 space-x-3'>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
        Book FREE Clinic Visit
      </button>
      <button  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
        Book FREE Online Consultation
      </button>
      </div>
    </div>
  );
};

export default ClinicAppointment;
