import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = ({ setIsLoggedIn}) => {
    const [formData,setFormData]=useState({
        email:"",password:""
    })

    const navigate=useNavigate();

    const [showPassword,setShowPassword]=useState(false);
    function changeHandler(e){
        const {value,name}=e.target
        setFormData((prevData)=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }

    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true)
        toast.success("Loggedin Successfully")
        navigate("/dashboard")
    }

  return (
   <form onSubmit={submitHandler} 
   className='flex flex-col w-full gap-y-4 mt-6'>
    <label className='w-full'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address <sup className='text-pink-200' >*</sup>
        </p>
        <input
            className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-richblack-5'
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            name="email"
            placeholder="Enter Email Id"
        />
    </label>
    <label  className='w-full relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
           Password <sup className='text-pink-200'>*</sup>
        </p>
        <input
              className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-richblack-5'
            required
            type={showPassword?"text":"password"}
            value={formData.password}
            onChange={changeHandler}
            name="password"
            placeholder="Enter Password"
        />

        <span
            className='absolute right-3 top-[38px] cursor-pointer' 
         onClick={()=>setShowPassword((prev=>(!prev)))}>
            {showPassword?(<AiOutlineEyeInvisible
                 fontSize={24} fill='#AFB2BF'
            />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
        </span>

        <Link to="#" className='w-full'>
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
        </Link>
    </label>

    <button className='bg-yellow-50 rounded-[8px] font-medium  text-richblack-900 px-[12px] py-[8px] mt-6' >Sign In</button>
   </form>
  )
}

export default LoginForm