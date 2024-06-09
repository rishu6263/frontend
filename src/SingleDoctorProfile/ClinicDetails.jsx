import React from 'react';

const ClinicDetails = ({ name, address, timing, payment, mapLink }) => {
  return (
    <div className="space-y-4 p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600">{address}</p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold mr-2">Timing:</span>
        {timing}
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
        <span className="text-green-500 font-semibold">{payment}</span>
        <a href={mapLink} className="text-sm text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default ClinicDetails;
