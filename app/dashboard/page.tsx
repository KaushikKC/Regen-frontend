"use client"
import { ConnectWallet } from '@thirdweb-dev/react'
import React from 'react'
import { FaUserCircle } from "react-icons/fa";

function page() {
  return (
    <div>
      <div className='flex w-full justify-between items-center p-5'>
        <h1>REGEN</h1>
        <ConnectWallet 
          detailsBtn={() => {
            return (
              <div>
                <FaUserCircle className='h-8 w-[70px] cursor-pointer' />
              </div>
            )
          }}
        />
      </div>
    </div>
  )
}

export default page