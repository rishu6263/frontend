import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleDoctorProfile from '../SingleDoctorProfile/SingleDoctorProfile';
import ClinicAppointment from '../SingleDoctorProfile/ClinicAppointment.jsx';
import ClinicDetails from '../SingleDoctorProfile/ClinicDetails.jsx';
import SmallDoctorCard from '../component/SmallDoctorCard.jsx';
import Reviews from '../component/Reviews.jsx';
import { doctorsData } from '../services/doctor-service.js'; // Ensure this is correctly imported

const DoctorsProfile = () => {
  const { id } = useParams();
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    doctorsData()
      .then(data => {
        console.log('Fetched doctors data:', data);
        if (Array.isArray(data)) {
          
          setDoctors(data);
        } else {
          console.error('Expected an array but got:', data);
          setError('Failed to load doctor data.');
        }
      })
      .catch(error => {
        console.error('Error fetching doctors data:', error);
        setError('Error fetching doctors data.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const doctor = doctors.find(doctor => doctor.id === id);
  const otherDoctors = doctors.filter(doctor => doctor.id !== id); // Filter out the current doctor

  // Mock reviews data
  const reviews = [
    {
      patientName: 'John Doe',
      patientImage: 'https://via.placeholder.com/40', // Replace with actual patient image URL
      date: '2024-05-01',
      comment: 'Great experience! Dr. William Black was very professional and caring.'
    },
    {
      patientName: 'Jane Smith',
      patientImage: 'https://via.placeholder.com/40', // Replace with actual patient image URL
      date: '2024-04-15',
      comment: 'The consultation was thorough and helpful. Highly recommend Dr. Black.'
    }
    // Add more reviews as needed
  ];

  if (!doctor) {
    return <div className="text-center text-red-500">Doctor not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
      {/* Main Profile Section */}
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:space-x-8">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <SingleDoctorProfile
            name={doctor.name}
            degree="MBBS"
            experience="5+ years"
            rating="5/10"
            image={doctor.image}
            active={doctor.active}
          />
        </div>

        {/* Clinic Appointment and Details Section */}
        <div className="w-full lg:w-2/3">
          <div className="mb-8">
            <ClinicAppointment
              location="Impressions Dental Specialities (Sahakaranagar)"
              price="₹400"
              timing="Mon-Fri: 09:30 AM - 08:00 PM, Sat: 09:30 AM - 06:30 PM"
              verified={true}
              callToActionText="Book Now"
              callToActionLink="#" // Replace with actual booking link
            />
          </div>

          <div>
            <ClinicDetails
              name="Impressions Dental Specialities"
              address="Number 864, Prakriti, D Block, 60 Feet Road, Landmark: Above Third Wave Coffee, Bangalore"
              timing="Mon-Fri: 09:30 AM - 08:00 PM, Sat: 09:30 AM - 06:30 PM"
              payment="Online Payment Available"
              mapLink="https://www.google.com/maps/place/Impressions+Dental+Specialities+(Sahakaranagar)" // Replace with actual map link
            />
          </div>

          {/* Reviews Section */}
          <Reviews reviews={reviews} />
        </div>
      </div>

      {/* Sidebar for Other Doctors */}
      <div className="w-full lg:w-1/3 lg:pl-8">
        <h2 className="text-xl font-bold mb-4">Other Doctors</h2>
        <div className="flex flex-col space-y-4">
          {otherDoctors.map(otherDoctor => (
            <SmallDoctorCard key={otherDoctor.id} doctor={otherDoctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsProfile;
