import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {useState} from "react"
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        // accountType:"student"
    })

    const Navigate=useNavigate();
    const [showPasswordE,setShowPasswordE]=useState(false);
    const [showPasswordC,setShowPasswordC]=useState(false);
    const [accountType,setAccountType]=useState("student");
    function changeHandler(e){
        const {value,name}=e.target
        setFormData((prevData)=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }

    function submiHandler(e){
        e.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("password do not match")
            return;
        }
        toast.success("Account Created Successfully")
        Navigate("/dashboard")
        const finalData={
            ...formData,
            accountType
        }

        console.log(finalData)

    }
    
  return (
    <div className='flex flex-col gap-4' >
        <div className='flex border-b-[1px] border-richblack-5 bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType==="student"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"}
             py-2  px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("student")}>Student</button>
            <button  className={`${accountType==="instructor"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"}
             py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("instructor")}> Instructor</button>
        </div>
        <form className='flex flex-col gap-4' onSubmit={submiHandler}>

        <div className='flex justify-between gap-4'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup  className='text-pink-200'>*</sup></p>
                <input
                    required
                    className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-richblack-5'
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    value={formData.firstName}
                    placeholder="Enter first name"
                />
            </label>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup  className='text-pink-200'>*</sup></p>
                <input
                    required
                    className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-richblack-5'
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    value={formData.lastName}
                    placeholder="Enter Last name"
                />
            </label>
        </div>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email <sup className='text-pink-200'>*</sup></p>
                <input
                    className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-richblack-5'
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    value={formData.email}
                    placeholder="Enter email"
                />
            </label>
        
        <div className='flex gap-4 justify-between'>
            <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Create Password <sup  className='text-pink-200'>*</sup>
            </p>
            <input
                required
                className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-richblack-5'
                type={showPasswordE?"text":"password"}
                value={formData.password}
                onChange={changeHandler}
                name="password"
                placeholder="Enter Password"
            />

            <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowPasswordE((prev=>(!prev)))}>
                {showPasswordE?(<AiOutlineEyeInvisible
                     fontSize={24} fill='#AFB2BF'  
                />):(<AiOutlineEye
                    fontSize={24} fill='#AFB2BF' 
                />)}
            </span>
            </label>
            <label className='w-full relative '>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Confirm Password <sup className='text-pink-200'>*</sup>
            </p>
            <input
                required
                className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] border-richblack-5'
                type={showPasswordC?"text":"password"}
                value={formData.confirmPassword}
                onChange={changeHandler}
                name="confirmPassword"
                placeholder="Confirm Password"
            />

            <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowPasswordC((prev=>(!prev)))}>
                {showPasswordC?(<AiOutlineEyeInvisible 
                    fontSize={24} fill='#AFB2BF' 
                />):(<AiOutlineEye fontSize={24} fill='#AFB2BF'  />)}
            </span>
            </label>
        </div>
        <button className='bg-yellow-50 rounded-[8px] font-medium w-full text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm