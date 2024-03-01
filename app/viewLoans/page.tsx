'use client'
import React from 'react'
import DefaultLayout from '../Layouts/defaultLayout'
import { ConnectWallet } from '@thirdweb-dev/react'
import { FaUserCircle } from 'react-icons/fa'
import LoanItem from '../components/LoanItem'

function page() {
    const loans = [
      {
        loanNo: "ATS 000260",
        borrower: "Peyton Manning",
        userType: "George Barnett",
        loanInfo: "3518 Ozark St. Baton Rouge, LA 70805",
        overview: "Mar 29, 2016",
        status: "TO PROCESSOR",
      },
      {
        loanNo: "ATS 000260",
        borrower: "Peyton Manning",
        userType: "George Barnett",
        loanInfo: "3518 Ozark St. Baton Rouge, LA 70805",
        overview: "Mar 29, 2016",
        status: "TO PROCESSOR",
      },
      {
        loanNo: "ATS 000260",
        borrower: "Peyton Manning",
        userType: "George Barnett",
        loanInfo: "3518 Ozark St. Baton Rouge, LA 70805",
        overview: "Mar 29, 2016",
        status: "TO PROCESSOR",
      },
      {
        loanNo: "ATS 000260",
        borrower: "Peyton Manning",
        userType: "George Barnett",
        loanInfo: "3518 Ozark St. Baton Rouge, LA 70805",
        overview: "Mar 29, 2016",
        status: "TO PROCESSOR",
      },
      {
        loanNo: "ATS 000260",
        borrower: "Peyton Manning",
        userType: "George Barnett",
        loanInfo: "3518 Ozark St. Baton Rouge, LA 70805",
        overview: "Mar 29, 2016",
        status: "TO PROCESSOR",
      },
      // add the list of loans here
    ];
  
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
          <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-slate-600">Loans</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loans.map((loan) => (
            <LoanItem key={loan.loanNo} loan={loan} />
          ))}
        </div>
      </div>
        </div>
    </div>
    }
    />
  )
}

export default page