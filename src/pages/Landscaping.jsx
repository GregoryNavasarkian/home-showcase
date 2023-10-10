import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landscaping = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen'>
      <button onClick={() => navigate(-1)}>back</button>
      Landscaping
    </div>
  )
}

export default Landscaping;