import React, { useEffect, useState } from 'react';
import login_doctor from "../assets/images/doctor_register.jpg";
import { doctorSignup } from '../services/doctor-service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DoctorAcount = () => {
  const navigate=useNavigate()
  const [doctor, setDoctor] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [doctorData, setDoctorData] = useState({
    consultationFee: '',
    degree: '',
    modeOfAppointment: '',
    summary: '',
    workingDays: '',
    workingTime: '',
    specialization: '',
    gender: '',
    registrationNumber: '',
    registrationCouncil: '',
    registrationYear: '',
    college: '',
    email: '',
    name: '',
    password: '',
    confirmPassWord:'',
    clinicName: '',
    address: '',
  });

  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    const { value } = event.target;
    setDoctor({ ...doctor, [property]: value });
    setDoctorData({ ...doctorData, [property]: value });
  };

  useEffect(() => {
    console.log(doctor);
  }, [doctor]);

  useEffect(() => {
    console.log(doctorData);
  }, [doctorData]);

  const resetData = () => {
    setDoctor({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setDoctorData({
      consultationFee: '',
      degree: '',
      modeOfAppointment: '',
      summary: '',
      workingDays: '',
      workingTime: '',
      specialization: '',
      gender: '',
      registrationNumber: '',
      registrationCouncil: '',
      registrationYear: '',
      college: '',
      email: '',
      name: '',
      password: '',
      clinicName: '',
      address: '',
    });
    setShowDetailedForm(false);
  };

  const isFormComplete = Object.values(doctorData).every(value => value !== '' && value !== null);

  const continueRegistration = () => {
    if (doctor.name && doctor.email && doctor.password) {
      setShowDetailedForm(true);
    } else {
      toast.error('Please fill in name, email, and password to continue.');
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (error.isError) {
      toast.error(error.errors.response.data.message);
      resetData();
      return;
    }
    doctorSignup(doctorData)
      .then((resp) => {
        toast.success('Doctor is registered successfully!!');
        resetData();
        console.log(resp)
        navigate('/doctor-login')
      })
      .catch((err) => {
        setError({
          errors: err,
          isError: true,
        });
      });
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      {!showDetailedForm && (
        <div className="md:w-1/3 max-w-sm">
          <img src={login_doctor} alt="Sample image" />
        </div>
      )}
      <div className="md:w-1/3 max-w-sm">
        {!showDetailedForm ? (
          <>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="text"
              name="name"
              value={doctor.name}
              onChange={(e) => handleChange(e, 'name')}
              placeholder="User Name"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="email"
              name="email"
              value={doctor.email}
              onChange={(e) => handleChange(e, 'email')}
              placeholder="Email Address"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              name="password"
              value={doctor.password}
              onChange={(e) => handleChange(e, 'password')}
              placeholder="Password"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              name="confirmPassWord"
              value={doctor.confirmPassWord}
              onChange={(e) => handleChange(e, 'confirmPassWord')}
              placeholder=" confirm Password"
            />
            <div className="text-center flex space-x-1">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                onClick={continueRegistration}
              >
                Continue with Registration
              </button>
              <div
                onClick={resetData}
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              >
                Reset
              </div>
              <div> Have an account</div>
              <button
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                  onClick={()=>navigate('/doctor-login')}
                >
                  Sign in
                </button>
            </div>
          </>
        ) : (
          <section className="mt-13 h-screen flex flex-col justify-center items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-2/3 max-w-2xl w-full">
              <div className="text-sm text-gray-500 mb-4">* All Details are to be Filled</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Consultation Fee"
                  name="consultationFee"
                  value={doctorData.consultationFee}
                  onChange={(e) => handleChange(e, 'consultationFee')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Degree"
                  name="degree"
                  value={doctorData.degree}
                  onChange={(e) => handleChange(e, 'degree')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Mode Of Appointment"
                  name="modeOfAppointment"
                  value={doctorData.modeOfAppointment}
                  onChange={(e) => handleChange(e, 'modeOfAppointment')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Summary"
                  name="summary"
                  value={doctorData.summary}
                  onChange={(e) => handleChange(e, 'summary')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Working Days"
                  name="workingDays"
                  value={doctorData.workingDays}
                  onChange={(e) => handleChange(e, 'workingDays')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Working time (from - to)"
                  name="workingTime"
                  value={doctorData.workingTime}
                  onChange={(e) => handleChange(e, 'workingTime')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Specialization"
                  name="specialization"
                  value={doctorData.specialization}
                  onChange={(e) => handleChange(e, 'specialization')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Gender"
                  name="gender"
                  value={doctorData.gender}
                  onChange={(e) => handleChange(e, 'gender')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Registration Number"
                  name="registrationNumber"
                  value={doctorData.registrationNumber}
                  onChange={(e) => handleChange(e, 'registrationNumber')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Registration Council"
                  name="registrationCouncil"
                  value={doctorData.registrationCouncil}
                  onChange={(e) => handleChange(e, 'registrationCouncil')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Registration Year"
                  name="registrationYear"
                  value={doctorData.registrationYear}
                  onChange={(e) => handleChange(e, 'registrationYear')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="College"
                  name="college"
                  value={doctorData.college}
                  onChange={(e) => handleChange(e, 'college')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Clinic Name"
                  name="clinicName"
                  value={doctorData.clinicName}
                  onChange={(e) => handleChange(e, 'clinicName')}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={doctorData.address}
                  onChange={(e) => handleChange(e, 'address')}
                />
              </div>
              <div className="text-center flex space-x-1 mt-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 cursor-pointer text-white uppercase rounded text-xs tracking-wider"
                  disabled={!isFormComplete}
                  onClick={(e)=>submitForm(e)}
                >
                  Submit
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                  onClick={resetData}
                >
                  Reset
                </button>
                
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default DoctorAcount;
