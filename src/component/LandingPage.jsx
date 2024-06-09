import React from 'react';

const LandingPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 pb-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Consult top doctors online for any health concern</h2>
                <p className="text-gray-600">Private online consultations with verified doctors in all specialties</p>
            </div>
            <button className="block mx-auto mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                View All Specialties
            </button>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center w-50 h-30">
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" className="w-32 h-32 mb-4" alt="Period doubts" />
                    <h5>Period doubts or Pregnancy</h5>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        CONSULT NOW
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center w-50 h-30">
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" className="w-32 h-32 mb-4" alt="Period doubts" />
                    <h5>Acne,Pimple,Skin issues</h5>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        CONSULT NOW
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center w-50 h-30">
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" className="w-32 h-32 mb-4" alt="Period doubts" />
                    <h5>Performances issues in Bed</h5>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        CONSULT NOW
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center w-50 h-30">
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" className="w-32 h-32 mb-4" alt="Period doubts" />
                    <h5>Cold, Cough, or Fever</h5>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        CONSULT NOW
                    </button>
                </div>
                
                <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center w-50 h-30">
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" className="w-32 h-32 mb-4" alt="Period doubts" />
                    <h5>Child not Feeling well</h5>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        CONSULT NOW
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center w-50 h-30">
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" className="w-32 h-32 mb-4" alt="Period doubts" />
                    <h5>Depression or anxiety</h5>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        CONSULT NOW
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center w-50 h-30">
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" className="w-32 h-32 mb-4" alt="Period doubts" />
                    <h5>Depression or anxiety</h5>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        CONSULT NOW
                    </button>
                </div>
                {/* Add more consultation cards */}
            </div>
        </div>
    );
};

export default LandingPage;