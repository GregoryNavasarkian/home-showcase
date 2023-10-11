import React from 'react';
import { useNavigate } from 'react-router-dom';

const Climate = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full">
      <button onClick={() => navigate(-1)} className="">
        Go Back
      </button>
      <h1>Climate</h1>
    </div>
  )
}

export default Climate;