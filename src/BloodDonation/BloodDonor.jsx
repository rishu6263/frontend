import React, { useState } from 'react';
import { donateBlood } from '../services/blood-service';
import { toast } from 'react-toastify';
import { getCurrentUserDetail } from '../auth/userIndex';
import { useNavigate } from 'react-router-dom';
const BloodDonor = () => {
  const id=getCurrentUserDetail()._id;
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    userId:id,
    bloodType: '',
    healthHistory: '',
    donationHistory: '',
    identityFile: null,
  });

  const handleChange = (e,property) => {
    setFormData({ ...formData,[property]:e.target.value});
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, identityFile: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.bloodType.trim()== '' ||   formData.healthHistory.trim()== '' || formData.donationHistory.trim()== ''){
      toast.error("Some details are missing !!");
    return ;
    }
    donateBlood(formData)
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
      <h2 className="text-xl font-bold mb-4">Blood Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="bloodType" className="block text-gray-700 font-bold mb-2">
            Blood Type
          </label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.bloodType}
            onChange={(e)=>handleChange(e,'bloodType')}
            placeholder="Enter your blood type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="medicationDetails" className="block text-gray-700 font-bold mb-2">
            Medication Details (if any)
          </label>
          <textarea
            id="healthHistory"
            name="healthHistory"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            value={formData.healthHistory}
            onChange={(e)=>handleChange(e,'healthHistory')}
            placeholder="Enter details of any medications you are currently taking"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="lastDonationDate" className="block text-gray-700 font-bold mb-2">
            Last Blood Donation Date
          </label>
          <input
            type="date"
            id="donationHistory"
            name="donationHistory"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.donationHistory}
            onChange={(e)=>handleChange(e,'donationHistory')}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="identityFile" className="block text-gray-700 font-bold mb-2">
            Identity Document
          </label>
          <input
            type="file"
            id="identityFile"
            name="identityFile"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => document.getElementById('identityFile').click()}
          >
            Upload Identity Document
          </button>
          {formData.identityFile && (
            <span className="ml-2">{formData.identityFile.name}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BloodDonor;