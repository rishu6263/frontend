import React, { useState } from 'react';
import { requestBlood } from '../services/blood-service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getCurrentUserDetail } from '../auth/userIndex';

const BloodReceiver = () => {
  const navigate=useNavigate()
  const id=getCurrentUserDetail()._id;
  const [formData, setFormData] = useState({
    userId:id,
    bloodType: '',
    medicalCondition:'',
  });

  const handleChange = (e,property) => {
    setFormData({ ...formData, [property]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.bloodType.trim()== '' ||   formData.medicalCondition.trim()== ''){
      toast.error("Some details are missing !!");
    return ;
    }
    requestBlood(formData)
    .then((data)=>{
      toast.success("Your Request Sent Successfully!!");
      navigate('/')
    })
    .catch((error)=>{
      toast.error("Something went wrong !!")
      console.log(error);
    })
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-red-600">Blood Receiver Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="bloodType" className="block text-gray-800 font-semibold mb-2">
            Blood Type Needed
          </label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.bloodType}
            onChange={(e)=>handleChange(e,'bloodType')}
            placeholder="Enter required blood type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="requiredUnits" className="block text-gray-800 font-semibold mb-2">
            Required Units
          </label>
          <input
            type="number"
            id="medicalCondition"
            name="medicalCondition"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.medicalCondition}
            onChange={(e)=>handleChange(e,'medicalCondition')}
            placeholder="Enter required units"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BloodReceiver;