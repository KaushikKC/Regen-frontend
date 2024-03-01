import React, { ReactNode, useEffect, useState } from 'react';

interface StepProps {
  title: string;
  children?: ReactNode;
  completed?: boolean;
  nextDisabled?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  open?: boolean;
}

const Step: React.FC<StepProps> = ({ title, children, completed = false, nextDisabled = true, onNext, onPrev, open }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputEntered, setInputEntered] = useState(false);
  const [error, setError] = useState<string>('');

  const handleNext = () => {
    if (!nextDisabled || inputEntered) {
      if (onNext) onNext();
    }
  };

  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  const handlePrev = () => {
    if (onPrev) onPrev();
  };

  const handleToggle = () => {
    if ((inputEntered && !nextDisabled) || completed || !open) {
      setIsOpen(!isOpen);
      setError('');
    } else {
      setError('Please fill in all the required fields.');
    }
  };

  return (
    <div className={`border border-gray-300 mx-10 rounded-lg p-4 mb-6 ${completed ? 'opacity-50' : ''} ${!nextDisabled ? 'bg-gray-400 cursor-not-allowed' : ''}`}>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
        <div className='flex items-center space-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            onClick={handleToggle}
            className='h-6 w-6 text-gray-500 cursor-pointer'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
      {isOpen && <div className='mt-4'>{children}</div>}
    </div>
  );
};

export default Step;