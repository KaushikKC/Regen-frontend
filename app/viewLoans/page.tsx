'use client'
import React from 'react'
import DefaultLayout from '../Layouts/defaultLayout'
import { ConnectWallet } from '@thirdweb-dev/react'
import { FaUserCircle } from 'react-icons/fa'

function page() {
  return (
    <DefaultLayout content={
    <div className='ml-[250px] w-full'>
        <div className='bg-[#F8F5F2] w-full min-h-screen'>
        <div className='h-16 py-2 px-5 w-full flex justify-end'>
            <ConnectWallet 
              detailsBtn={() => (
                <div>
                  <FaUserCircle className='h-6 w-[70px] text-black cursor-pointer' />
                </div>
              )}
            />
          </div>
        </div>
    </div>
    }
    />
  )
}

export default page