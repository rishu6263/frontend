import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import companyLogo from '../assets/images/logo1.svg';
import { doUserLogout, isUserLoggedIn } from '../auth/userIndex';
import { doDoctorLogout, getCurrentDoctorDetail, isDoctorLoggedIn } from '../auth/doctorIndex';
import { toast } from 'react-toastify';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const [userLoggedIn,setUserLoggedIn]=useState(false);
  const [doctorLoggedIn,setDoctorLoggedIn]=useState(false);
  const [userId,setUserId]=useState([]);
  
  // useEffect(() => {
  //   console.log(getCurrentDoctorDetail());
  //   doctorActiveUpdate(getCurrentDoctorDetail())
  //   .then(setUserId);
  // }, []);

  const handleLogout = () => {
    if (isUserLoggedIn()) {
      doUserLogout(() => {
        toast.success("USER logged out");
        navigate('/select-login');
      });
    } else if (isDoctorLoggedIn()) {
      doDoctorLogout(() => {
        toast.success("DOCTOR logged out");
        navigate('/select-login');
      })
    } else {
      toast.error("Already logged out");
    }
  };
  // useEffect(()=>{
  //   const check=async()=>{
  //     if(isUserLoggedIn()) {
  //       setUserLoggedIn(true);
  //       console.log('User is true')
  //     }
  //   }
  //   check();
  // },[])

  // useEffect(()=>{
  //   const check=async()=>{
  //     if(isDoctorLoggedIn()) {
  //       setDoctorLoggedIn(true)
  //       console.log('Doctor is True')
  //     }
  //   }
  //   check();
  // },[])

  const checkDoctor = () => isDoctorLoggedIn() && !isUserLoggedIn();
  const checkUser = () => !isDoctorLoggedIn() && isUserLoggedIn();

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
          <img src={companyLogo} onClick={() => navigate('/')} alt='' className='w-16 h-16 rounded-full' />
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
          <Link to='/blood-donor' className='hover:text-darkGrayishBlue'>Donate Blood</Link>
          <Link to='/blood-receiver' className='hover:text-darkGrayishBlue'>Request Blood</Link>
          <Link to='/blood-service' className='hover:text-darkGrayishBlue'>Blood-Services</Link>
          {isUserLoggedIn() && (
            <>
              <Link to='/chat' className='hover:text-darkGrayishBlue'>MediBuddy</Link>
              <Link to='/doctorcard' className='hover:text-darkGrayishBlue'>Saviours</Link>
            </>
          )}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <form className="flex">
            <input type="text" className="rounded-l-lg p-3 w-96 border-t border-b border-l text-gray-800 border-gray-200 bg-white mb-2 md:mb-0 md:mr-0 md:border-r-0" placeholder="Search... for Hospital's, Doctors, specialization" />
            <button type="submit" className="px-4 rounded-r-lg bg-cyan-500 text-white border-cyan-500 border-t border-b border-r">
              Search
            </button>
          </form>
        </div>
        {checkUser() && (
          <Link to='/user-profile' className='hidden p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300 md:block'>
            Profile
          </Link>
        )}
        <Link to='/medicines' className='hidden p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300 md:block'>
            Medicine
          </Link>
        { checkDoctor() && (
          <Link to='/doctor-profile' className='hidden p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300 md:block'>
            Profile
          </Link>
        )}
        {/* Button */}
        {(!isDoctorLoggedIn() && !isUserLoggedIn()) && (
          <Link to='/select-signup' className='hidden p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300 md:block'>
            Login/signup
          </Link>
        )}
        {(isUserLoggedIn() || isDoctorLoggedIn()) && (
          <button className='hidden p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300 md:block' onClick={handleLogout}>
            Logout
          </button>
        )}
        {/* Hamburger Icon */}
        <button
          className={toggleMenu ? 'open block hamburger md:hidden focus:outline-none' : 'block hamburger md:hidden focus:outline-none'}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div className={toggleMenu ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md' : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'}>
          <Link to='#'>Pricing</Link>
          <Link to='#'>Product</Link>
          <Link to='#'>About Us</Link>
          <Link to='#'>Careers</Link>
          <Link to='#'>Community</Link>
          {(!isUserLoggedIn() && !isDoctorLoggedIn()) && (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/login'>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
