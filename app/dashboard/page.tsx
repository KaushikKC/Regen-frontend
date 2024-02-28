"use client"
import { ConnectWallet } from '@thirdweb-dev/react'
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import DefaultLayout from '../Layouts/defaultLayout';

function page() {
  const [registered,setRegistered] = useState(false)
  return (
    <DefaultLayout content={
    
      
      <div className='w-full relative'>
      <div className=' w-full p-5 bg-[#F8F5F2] h-screen'>
        <div className='h-16 py-2 px-5 w-full flex justify-between'>
        <h1 className='text-black font-semibold'>REGEN</h1>
        <ConnectWallet 
          detailsBtn={() => {
            return (
              <div>
                <FaUserCircle className='h-6 w-[70px] text-black cursor-pointer' />
              </div>
            )
          }}
        />
        </div>
      </div>
      {!registered && (
          <div className='absolute inset-0 flex justify-center items-center'>
            <div className='bg-[rgba(0,0,0,0.7)]/70 z-[9999] absolute backdrop-blur-md inset-0'></div>
            <div className='h-[500px] w-[400px] z-[99999] bg-[#fff1e3] rounded-md p-5'>
              <h2 className='text-2xl font-semibold  text-black mb-4 text-center '>Registration</h2>
              <form className='px-8 py-6'>
                <input type='text' placeholder='Name' className='w-full border-b focus:border-none rounded-md  bg-transparent px-3 py-2 mb-3' />
                <input type='email' placeholder='Email' className='w-full border-b rounded-md bg-transparent px-3 py-2 mb-3' />
                <input type='password' placeholder='Password' className='w-full border-b rounded-md bg-transparent px-3 py-2 mb-3' />
                <button type='submit' className='bg-[#6BA865] text-white font-bold px-4 py-2 rounded-md w-full'>Register</button>
              </form>
            </div>
          </div>
        )}
    </div>
    }
    />
  )
}

export default page