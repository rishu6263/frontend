import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReceiverCard = ({ receiver }) => {
  const navigate = useNavigate();
  const { userId, bloodType, medicalCondition } = receiver;

  const handleData = () => {
    navigate(`/receiver/${userId}`);
  };

  return (
    <div className="m-4 p-6 max-w-xs rounded-lg bg-white hover:bg-gray-100 shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-xl font-bold py-3 text-gray-800">Receiver ID: {userId}</h3>
      <h4 className="text-lg font-semibold py-2 text-gray-600">Blood Type: {bloodType}</h4>
      <p className="py-2 text-gray-600">Medical Condition: {medicalCondition}</p>
      <button 
        className='mt-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition-colors duration-300' 
        onClick={handleData}
      >
        View Profile
      </button>
    </div>
  );
};

export default ReceiverCard;