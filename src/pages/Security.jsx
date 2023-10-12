import React from "react";
import ReactMarkdown from 'react-markdown';
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import rehypeRaw from 'rehype-raw';

import MARKDOWN from './security.md';

const Security = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-[95vh] flex justify-center bg-indigo-950">
      <button className="absolute text-white mr-2" onClick={() => navigate(-1)}> <ArrowLeftIcon /> Go Back</button>
      <div className="lg:w-3/5 w-4/5 bg-indigo-50 text-indigo-950 rounded-md shadow-md mt-24 mb-16 p-4 justify-center">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} className='prose'>{MARKDOWN}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Security;
