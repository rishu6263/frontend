import React, { useEffect, useState } from 'react';
import MedicineCard from './MedicineCard.jsx';

// import SearchBar from './SearchBar.jsx';
import { getAllMedicine } from '../../services/medicine-service.js';

const MedicinePage = () => {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  useEffect(() => {
    getAllMedicine()
      .then((data) => {
        if (Array.isArray(data.data.data)) {
          setMedicines(data.data.data);
        } else {
          console.error('Expected an array but got:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching doctors data:', error);
      });
  }, []);

  // const handleSearch = (query) => {
  //   const filtered = medicines.filter((medicine) =>
  //     medicine.name.toLowerCase().includes(query.toLowerCase()) || medicine.type.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredMedicines(filtered);
  // };

  return (
    <div>
      <div className="w-full h-40 bg-gradient-to-r from-blue-200 to-cyan-200 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4 italic">Medicines</h1>
      </div>
      <div className='ml-9 mt-5 flex'>
        {/* <SearchBar placeholder="Search for Medicine" buttonText="Search" onSearch={handleSearch} /> */}
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {medicines.map((medicine,_id) => (
          <MedicineCard key={_id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default MedicinePage;