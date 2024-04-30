"use client";
import React, { useState } from "react";
import DefaultLayout from "../Layouts/defaultLayout";
import { ConnectWallet } from "@thirdweb-dev/react";
import { FaUserCircle } from "react-icons/fa";
import Step from "../components/Steps";
import { useRouter } from "next/navigation";
interface InputState {
  [key: string]: boolean;
}

function Page() {
  const router = useRouter()

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


  const [Name, setName] = useState("")

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [landArea, setLandArea] = useState("");

  const [pan, setPan] = useState("")


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

    console.log("asdsa",inputEntered)
    console.log("name",Name, pan, address, amount, landArea)

    router.push("viewLoans")
    const currentInputs: string[] = currentStepInputs[step];
    const areCurrentStepInputsFilled = currentInputs.every(input => inputEntered[input]);
    const areAllStepsFilled = Object.values(inputEntered).every(value => value);

    if (areCurrentStepInputsFilled && areAllStepsFilled) {
      // Proceed with submission
      // Example: send data to server or perform other actions
      console.log("Form submitted successfully!");
    } else {
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
              title='Step 1. Personal details'
              nextDisabled={!preStepInputsFilled}
              onNext={handleNextStep}
              onPrev={handlePrevStep}
              open={activeStep === 1}
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
                  onChange={e => setName( e.target.value)}
                  required
                />
              </div>
              <div className='flex space-x-4 mb-4'>
             
              
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
                  onChange={e => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor='address' className='block mb-1 text-black'>
                  Land Area
                </label>
                <textarea
                  id='address'
                  name='address'
                  className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black' 
                  placeholder='Land Area in Acre'
                  onChange={e => setLandArea(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor='address' className='block mb-1 text-black'>
                 Required Amount
                </label>
                <textarea
                  id='address'
                  name='address'
                  className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black' 
                  placeholder='Amount in HBAR'
                  onChange={e => setAmount(e.target.value)}
                  required
                ></textarea>
              </div>
            </Step>

            <Step title='Step 2. KYC details' nextDisabled={!areCurrentStepInputsFilled} onNext={handleNextStep} onPrev={handlePrevStep} open={activeStep === 3}>
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
                  onChange={e => setPan( e.target.value)}
                  required
                />
              </div>
            </Step>

            <div className='flex justify-between mt-4 mx-10'>
           
      
              </div>
              <div className="flex justify-center mt-4">
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded bg-[#6BA865] text-white font-bold text-xl"
              >
                Submit
              </button>
            </div>

          
          </div>
        </div>
      }
    />
  );
}

export default Page;
