"use client";
import React, { useState } from "react";
import DefaultLayout from "../Layouts/defaultLayout";
import { ConnectWallet } from "@thirdweb-dev/react";
import { FaUserCircle } from "react-icons/fa";
import Step from "../components/Steps";

interface InputState {
  [key: string]: boolean;
}

function Page() {
  const [inputEntered, setInputEntered] = useState<InputState>({
    mobile: false,
    email: false,
    otp: false,
    name: false,
    dob: false,
    gender: false,
    address: false,
    pan: false
  });
  const [step, setStep] = useState(1);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [preStep, setPrevStep] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const handleNextStep = () => {
    const currentInputs: string[] = currentStepInputs[step];
    const areCurrentStepInputsFilled = currentInputs.every(input => inputEntered[input]);
    const arePrevStepInputsFilled = currentInputs.every(input => inputEntered[input]);
    
    if (areCurrentStepInputsFilled && arePrevStepInputsFilled && step < 3) {
      setPrevStep(step);
      setStep(step + 1);
      setActiveStep(step + 1);
      setError('');
    } else if (step === 3) {
      // Handle case where there is no next step (e.g., show success message)
      setError('');
    } else {
      setError('Please fill in all the required fields for the current and previous steps.');
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
    setActiveStep(step - 1);
    setPrevStep(step - 2);
    setError('');
  };

  const handleInputChange = (field: string, value: string) => {
    setInputEntered({ ...inputEntered, [field]: value !== '' });
  };

  const currentStepInputs: { [key: number]: string[] } = {
    1: ['mobile', 'email', 'otp'],
    2: ['name', 'dob', 'gender', 'address'],
    3: ['pan']
    // Add other steps as needed
  };

  const handleSubmit = () => {
    const currentInputs: string[] = currentStepInputs[step];
    const areCurrentStepInputsFilled = currentInputs.every(input => inputEntered[input]);
    const areAllStepsFilled = Object.values(inputEntered).every(value => value);

    if (areCurrentStepInputsFilled && areAllStepsFilled) {
      // Proceed with submission
      // Example: send data to server or perform other actions
      console.log("Form submitted successfully!");
    } else {
      setError("Please fill in all the required fields.");
    }
  };

  let preStepInputsFilled = false;
  if (preStep > 0) {
    preStepInputsFilled = currentStepInputs[preStep].every(input => inputEntered[input]);
  }
  const areCurrentStepInputsFilled = currentStepInputs[step].every(input => inputEntered[input]);

  return (
    <DefaultLayout
      content={
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
            <p className='text-black text-xl font-bold flex justify-center my-10'>Loan Application</p>
            <Step
              title='Step 1. Mobile and email verification'
              nextDisabled={true}
              onNext={handleNextStep}
              open={activeStep === 1}
            >
              <div className='flex space-x-4 mb-4'>
                <div>
                  <label htmlFor='mobile' className='block mb-1 text-black'>
                    Mobile Number
                  </label>
                  <input
                    type='tel'
                    id='mobile'
                    name='mobile'
                    className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black' 
                    placeholder='Enter your mobile number'
                    onChange={e => handleInputChange('mobile', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-1 text-black'>
                    Email ID
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black'
                    placeholder='Enter your email ID'
                    onChange={e => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor='otp' className='block mb-1 text-black'>
                  Enter OTP
                </label>
                <input
                  type='text'
                  id='otp'
                  name='otp'
                  className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black'
                  placeholder='Enter OTP'
                  onChange={e => handleInputChange('otp', e.target.value)}
                  required
                />
              </div>
            </Step>

            <Step
              title='Step 2. Personal details'
              nextDisabled={!preStepInputsFilled}
              onNext={handleNextStep}
              onPrev={handlePrevStep}
              open={activeStep === 2}
            >
              <div>
                <label htmlFor='name' className='block mb-1 text-black'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black'
                  placeholder='Enter your full name'
                  onChange={e => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
              <div className='flex space-x-4 mb-4'>
                <div>
                  <label htmlFor='dob' className='block mb-1 text-black'>
                    Date of Birth
                  </label>
                  <input
                    type='date'
                    id='dob'
                    name='dob'
                    className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black'
                    onChange={e => handleInputChange('dob', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor='gender' className='block mb-1 text-black'>
                    Gender
                  </label>
                  <select
                    id='gender'
                    name='gender'
                    className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black'
                    onChange={e => handleInputChange('gender', e.target.value)}
                    required
                  >
                    <option value=''>Select gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor='address' className='block mb-1 text-black'>
                  Address
                </label>
                <textarea
                  id='address'
                  name='address'
                  className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black' 
                  placeholder='Enter your address'
                  onChange={e => handleInputChange('address', e.target.value)}
                  required
                ></textarea>
              </div>
            </Step>

            <Step title='Step 3. KYC details' nextDisabled={!areCurrentStepInputsFilled} onNext={handleNextStep} onPrev={handlePrevStep} open={activeStep === 3}>
              <div>
                <label htmlFor='pan' className='block mb-1 text-black'>
                  PAN Number
                </label>
                <input
                  type='text'
                  id='pan'
                  name='pan'
                  className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black'
                  placeholder='Enter your PAN number'
                  onChange={e => handleInputChange('pan', e.target.value)}
                  required
                />
              </div>
            </Step>

            <div className='flex justify-between mt-4 mx-10'>
              <button
                onClick={handlePrevStep}
                className='px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50'
                disabled={step === 1}
              >
                Prev
              </button>
              <button
                onClick={handleNextStep}
                className='px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50'
                disabled={step === 3}
              >
                Next
              </button>
              </div>
              <div className="flex justify-center mt-4">
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded bg-[#6BA865] text-white font-bold text-xl"
              >
                Submit
              </button>
            </div>

            {/* Error message */}
            {error && (
              <div className="mt-4 text-red-500 text-center">{error}</div>
            )}
          </div>
        </div>
      }
    />
  );
}

export default Page;
