import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import MARKDOWN from './climate.md';

const Climate = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[95vh] flex justify-center bg-indigo-950">
      <button className="absolute text-white mr-2" onClick={() => navigate(-1)}> <ArrowLeftIcon /> Go Back</button>
      <div className="lg:w-3/5 w-4/5 bg-indigo-50 text-indigo-950 rounded-md shadow-md mt-24 mb-16 p-4 justify-center">
        <ReactMarkdown className='prose'>{MARKDOWN}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Climate;