import React from 'react';
import { Link } from 'react-router-dom';
import doctorimage from '../assets/images/avatar-richard.png';

const UserProfile = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img src={doctorimage} alt="John Doe" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                                <h1 className="text-xl font-bold">Doctor</h1>
                                <Link to='/previous-doctor' className='hover:text-darkGrayishBlue'>
                                    Previous Patients
                                </Link>
                            </div>
                            <hr className="my-6 border-t border-gray-300" />
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Conditions</span>
                                <ul>
                                    <li className="mb-2">Name</li>
                                    <li className="mb-2">Contact number</li>
                                    <li className="mb-2">City</li>
                                    <li className="mb-2">Address</li>
                                    <li className="mb-2">Age</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">About Me</h2>
                            <h6>Patient Medical history</h6>
                            <p className="text-gray-700">Here</p>
                            <h3 className="font-semibold text-center mt-3 -mb-2">About Doctor</h3>
                            <div className="flex justify-center items-center gap-6 my-6">RegistrationYear</div>
                            <h2 className="text-xl font-bold mt-6 mb-4">Speciality</h2>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold"></span>
                                    <p>
                                        <span className="text-gray-700 mr-2"></span>
                                        <span className="text-gray-700">2017 - 2019</span>
                                    </p>
                                </div>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit.
                                </p>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Current health status</span>
                                    <p>
                                        <span className="text-gray-700 mr-2">at ABC Company</span>
                                        <span className="text-gray-700">2017 - 2019</span>
                                    </p>
                                </div>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;