import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  const { id, name, image, Specialization } = doctor;

  const handleData = () => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div className="m-4 p-6 max-w-xs rounded-lg bg-white hover:bg-gray-100 shadow-lg transition-transform transform hover:scale-105">
      <img className="rounded-lg w-full h-48 object-cover" alt={name} src={image} />
      <h3 className="text-xl font-bold py-3 text-gray-800">{name}</h3>
      <h4 className="text-lg font-semibold py-2 text-gray-600">{Specialization}</h4>
      <button 
        className='mt-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition-colors duration-300' 
        onClick={handleData}
      >
        View Profile
      </button>
    </div>
  );
};

export default DoctorCard;
