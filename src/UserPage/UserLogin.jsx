// src/pages/UserLogin.js
import React, { useEffect, useState } from 'react';
import { userLogin } from '../services/user_service';
import { toast } from 'react-toastify';
import { doUserLogin, getCurrentUserDetail, isUserLoggedIn } from '../auth/userIndex';
import { useNavigate } from 'react-router-dom';
import { isDoctorLoggedIn } from '../auth/doctorIndex';

const UserLogin = () => {
  const navigate=useNavigate();
  const[loginDetails,setLoginDetains]=useState({
    email:'',
    password:'',
  })


  const handleChange=(e,property)=>{
    setLoginDetains(
        {...loginDetails,[property]:e.target.value}
    )
  }

const handleSubmit=(event)=>{
  event.preventDefault()
  if(loginDetails.email.trim()=='' || loginDetails.password.trim()==''){
    toast.error("Username or Password missing !!");
    return ;
  }
  userLogin(loginDetails)
  .then((data)=>{
    toast.success("Successfully logged-in!!");
      doUserLogin(data,()=>{
        navigate('/')
      })
      
  })
  .catch((error)=>{
    toast.error("Something went wrong !!")
    console.log(error);
  })
}
if(isUserLoggedIn() || isDoctorLoggedIn()){
  return (
    <div className='h-screen text-center font-bold bg-slate-600 justify-center'>
      You Are Already Logged In !
      <span>Kyu Backchodi krr rha</span>
    </div>
  )
}else{
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form >
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={loginDetails.email}
              onChange={(e)=>handleChange(e,'email')}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={loginDetails.password}
              onChange={(e)=>handleChange(e,'password')}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button 
          type="submit" 
          onClick={(e)=>handleSubmit(e)}
          className="w-full bg-blue-500 text-white p-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );}
};

export default UserLogin;
