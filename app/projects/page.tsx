"use client"
import { ConnectWallet } from '@thirdweb-dev/react'
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import DefaultLayout from '../Layouts/defaultLayout';
import {project} from "./Integ"
function Page() {
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    proofOfWork: '',
    aadharNumber: '',
    otherAadharType: '', 
    numberValue: '',
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    try{
      const res = await project();
    }
    catch(err){
      console.log("error",err)
    }
    finally{
      setRegistered(true);

    }

    // Add your registration logic here
  };

  return (
    <DefaultLayout content={
      <div className='ml-[250px] w-full'>
        <div className='w-full p-5 bg-[#F8F5F2] min-h-screen'>
          <div className='h-16 py-2 px-5 w-full flex justify-end'>
            <ConnectWallet 
              detailsBtn={() => (
                <div>
                  <FaUserCircle className='h-6 w-[70px] text-black cursor-pointer' />
                </div>
              )}
            />
          </div>
          <div className='w-[500px] h-[700px] bg-slate-300'>

          </div>
        </div>
        {!registered && (
          <div className='absolute inset-0 w-[100vw] flex justify-center items-center'>
            <div className='bg-[rgba(0,0,0,0.7)]/70 z-[9999] absolute backdrop-blur-md inset-0'></div>
            <div className='h-[500px] w-[450px] z-[99999] bg-[#fff1e3] rounded-md p-5'>
              <h2 className='text-2xl font-semibold text-black mb-4 text-center '>Project Registation</h2>
              <form onSubmit={handleSubmit} className='px-8 py-6'>
                <input type='text' name='Project' value={formData.name} onChange={handleInputChange} placeholder='Name' className='w-full border-b focus:border-none rounded-md bg-transparent px-3 py-2 mb-3' />
                <input type='text' name='location' value={formData.location} onChange={handleInputChange} placeholder='Location' className='w-full border-b rounded-md bg-transparent px-3 py-2 mb-3' />
                <input type='date' name='Started at' value={formData.proofOfWork} onChange={handleInputChange} placeholder='' className='w-full border-b rounded-md bg-transparent px-3 py-2 mb-3' />
          
                <input type='text' name='Offsetted Carbon' value={formData.numberValue} onChange={handleInputChange} placeholder='Number Value' className='w-full border-b rounded-md bg-transparent px-3 py-2 mb-3' />
                <button type='submit' className='bg-[#6BA865] text-white font-bold px-4 py-2 rounded-md w-full mt-5'>Register</button>
              </form>
            </div>
          </div>
        )}
      </div>
    } />
  );
}

export default Page;
