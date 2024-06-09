import React, { useState } from 'react';
import { userSignup } from '../services/user_service';
import { toast } from 'react-toastify';
import login_patient from "../assets/images/patient.jpg";
import { Link, useNavigate } from 'react-router-dom';
const PatientSignup = () => {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [error,setError]=useState({
    errors:{},
    isError:false
  })
  
const handleChange=(event,property)=>{
 setUser({...user,[property]:event.target.value})
}
// useEffect(()=>{
//   console.log(user)
// },[user])
//Reset Data
const resetData=()=>{
setUser({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})
}
//Submit form
const submitForm=(event)=>{
  if(error.isError){
    toast.error(error.errors.response.data.message)
    resetData()
    return;
  }
  event.preventDefault();
  console.log(user)
  userSignup(user).then((resp)=>{
    toast.success("User is registered successfully !!")
    resetData()
    navigate('/user-login')
  }).catch((error)=>{
    console.log(error)
    setError({
      errors:error,
      isError:true,
    })
  })
}
  return (
    // <div><h1>hi</h1></div>
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={login_patient} alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" 
        type="text"
        name="name"
        value={user.name}
        onChange={(e)=>handleChange(e,'name')}
         placeholder="User Name" 

         />

        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
         type="email"
         name="email"
        value={user.email}
         onChange={(e)=>handleChange(e,'email')}
         placeholder="Email Address"

          />

        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
         type="password"
        name="password"
        value={user.password}
        onChange={(e)=>handleChange(e,'password')}
          placeholder="Password" 
          />
        

        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" 
        type="password"
        name="confirmPassword"
        value={user.passwordConfirm}
        onChange={(e)=>handleChange(e,'passwordConfirm')}
        placeholder="Confirm Password" 

        />
        <div className="text-center md:text-left flex ">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
           type="submit"
           onClick={(e)=>submitForm(e)}
           >
            Signup</button>
            <div className='uppercase rounded text-xs tracking-wider '>
              Have an account 
              <Link to='/user-login' className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">Login</Link>
             </div>
        </div>
       
      </div>
    </section>
  );
}

export default PatientSignup;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         <form onSubmit={(e)=>submitForm(e)}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={user.name}
//               onChange={(e)=>handleChange(e,'name')}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={user.email}
//               onChange={(e)=>handleChange(e,'email')}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={user.password}
//               onChange={(e)=>handleChange(e,'password')}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
           
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={user.passwordConfirm}
//               onChange={(e)=>handleChange(e,'passwordConfirm')}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//           <div className='gap-2 flex'>
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
//             Sign Up
//           </button>
//           <div  onClick={resetData} className="text-center w-full bg-blue-500 text-white p-2 rounded-md">
//             Reset
//           </div>
//           </div>
//         </form>
        
//       </div>
//     </div>
//   );
// };

// export default PatientSignup;
