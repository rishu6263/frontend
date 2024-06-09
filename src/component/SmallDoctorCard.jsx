import React from 'react';
import { Link } from 'react-router-dom';

const SmallDoctorCard = ({ doctor }) => {
  return (
    <Link to={`/doctor/${doctor.id}`} className="block p-4 rounded-lg shadow-md bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-l transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-center space-x-4">
        <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
        <div>
          <h3 className="text-lg font-semibold text-white">{doctor.name}</h3>
          <p className="text-sm text-gray-200">{doctor.speciality}</p>
        </div>
      </div>
    </Link>
  );
};

export default SmallDoctorCard;
