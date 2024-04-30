'use client'
import React from 'react'
import DefaultLayout from '../Layouts/defaultLayout'
import { ConnectWallet } from '@thirdweb-dev/react'
import { FaUserCircle } from 'react-icons/fa'
import LoanItem from '../components/LoanItem'

function Page() {
    const loans = [
      {
        loanNo: "Regen 1",
        borrower: "Mani",
        userType: "Farmer",
        loanInfo: "200000",
        Date: "April 1, 2023",
        status: "PROCESSING",
      },
      {
        loanNo: "Regen 2",
        borrower: "Anita",
        userType: "Farmer",
        loanInfo: "150000",
        Date: "April 10, 2023",
        status: "PROCESSING",
      },
      {
        loanNo: "Regen 3",
        borrower: "Vijay",
        userType: "Farmer",
        loanInfo: "100000",
        Date: "April 15, 2023",
        status: "PROCESSING",
      },
      {
        loanNo: "Regen 4",
        borrower: "Deepa",
        userType: "Farmer",
        loanInfo: "120000",
        Date: "April 20, 2023",
        status: "PROCESSING",
      },
      {
        loanNo: "Regen 5",
        borrower: "Suresh",
        userType: "Farmer",
        loanInfo: "180000",
        Date: "April 25, 2023",
        status: "PROCESSING",
      },
      {
        loanNo: "Regen 6",
        borrower: "Latha",
        userType: "Farmer",
        loanInfo: "220000",
        Date: "April 30, 2023",
        status: "PROCESSING",
      }
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

export default Page