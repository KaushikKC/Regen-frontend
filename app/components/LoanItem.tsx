import React from "react";

const LoanItem = ({ loan }:any) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between">
        <p className="text-gray-600">Loan No.</p>
        <p className="text-black">{loan.loanNo}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600">Borrower</p>
        <p className="text-black">{loan.borrower}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600">User Type</p>
        <p className="text-black">{loan.userType}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600">Loan Info</p>
        <p className="text-black">{loan.loanInfo}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600">Overview</p>
        <p className="text-black">{loan.overview}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-600">Status</p>
        <p className="text-black">{loan.status}</p>
      </div>
    </div>
  );
};

export default LoanItem;