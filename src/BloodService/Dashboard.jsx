import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DonorCard from './DonorCard';
import ReceiverCard from './ReceiverCard';
import { getAllDonors, getAllReceivers } from '../services/blood-service';

const Dashboard = () => {
  const [donors, setDonors] = useState([]);
  const [receivers, setReceivers] = useState([]);
  useEffect(() => {
    getAllDonors()
      .then((data) => {
        if (Array.isArray(data)) {
            setDonors(data);
        } else {
          console.error('Expected an array but got:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching doctors data:', error);
      });
  }, []);
  useEffect(() => {
    getAllReceivers()
      .then((data) => {
        if (Array.isArray(data)) {
            setReceivers(data);
        } else {
          console.error('Expected an array but got:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching doctors data:', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h2 className="text-2xl font-bold mb-6">Donors</h2>
      <div className="donors-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {donors.map((donor) => (
          <DonorCard key={donor.userId} donor={donor} />
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mt-10 mb-6">Receivers</h2>
      <div className="receivers-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {receivers.map((receiver) => (
          <ReceiverCard key={receiver.userId} receiver={receiver} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
