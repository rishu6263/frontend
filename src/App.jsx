import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import { useState } from 'react';
import Home from './pages/Home.jsx';
import Footer from './component/Footer.jsx';
import DoctorsPage from './component/DoctorsPage.jsx';
import DoctorsProfile from './DoctorPage/DoctorsProfile.jsx';
import DoctorAcount from './DoctorPage/DoctorAcount.jsx';
import 'react-toastify/dist/ReactToastify.css';
import UserLogin from './UserPage/UserLogin.jsx';
import PatientSignup from './UserPage/PatientSignup.jsx';
import DoctorLogin from './DoctorPage/DoctorLogin.jsx';
import Chat from './component/Chat.jsx';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.jsx';
import Register from './component/Register.jsx';
import Login from './component/Login.jsx';
import UserProfile from './UserPage/UserProfile.jsx';
import PreviousDoctor from './component/PreviousDoctor.jsx';
import BloodDonor from './BloodDonation/BloodDonor.jsx';
import BloodReceiver from './BloodDonation/BloodReceiver.jsx';
import LobbyScreen from './WebRTC/screens/Lobby.jsx';
import RoomPage from './WebRTC/screens/Room.jsx';
import MedicinePage from './component/Medicine/MedicinePage.jsx';
import Dashboard from './BloodService/Dashboard.jsx';

function App() {
  const [doctors, setDoctors] = useState([""]);
  // const getDoctors = async () => {
  //   try {
  //     await axios
  //       .get('/api/v1/doctor')
  //       .then((response) => {
  //         console.log(response.data.data.doc);
  //         setDoctors(response.data.data.doc);
  //         console.log(doctors);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getDoctors();
  // }, []);
  return (
    <>
    <Header />
   
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/user-register' element={<PatientSignup />} />
         <Route path='/doctorcard' element={<DoctorsPage />} />
         <Route path='/select-signup' element={<Register />} />
         <Route path='/select-login' element={<Login />} />
         <Route path='/user-login' element={<UserLogin />} />
         <Route path='/doctor/:id' element={<DoctorsProfile />} />
         <Route path='/doctor-register' element={<DoctorAcount />} />
         <Route path='/doctor-login' element={<DoctorLogin />} />
         <Route path='/chat' element={<ProtectedRoute element={<Chat />} allowedRoles={['user']} />} />
         <Route path='/user-profile' element={<UserProfile />} />
         <Route path='/previous-doctor' element={<PreviousDoctor />} />
         <Route path='/blood-service' element={<Dashboard />}/>
          <Route path='/medicines' element={<MedicinePage />}/>
          {/* <Route path="/" element={<LobbyScreen />} />
          <Route path="/room/:roomId" element={<RoomPage />}/> */}
         
    </Routes>
    
    <Footer />
    </>
  );
}

export default App;