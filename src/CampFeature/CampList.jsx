import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CampList = () => {
  const [camps, setCamps] = useState([]);

  const fetchCamps = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/camps', { headers: { 'x-auth-token': token } });
      setCamps(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCamps();
  }, []);

  return (
    <div>
      {camps.map((camp) => (
        <CampCard key={camp._id} camp={camp} />
      ))}
    </div>
  );
};

export default CampList;
