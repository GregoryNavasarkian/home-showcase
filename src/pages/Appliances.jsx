import React from 'react';
import { useNavigate } from 'react-router-dom';

const Appliances = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen'>
      <button onClick={() => navigate(-1)}>back</button>
      Appliances
    </div>
  )
}

export default Appliances;