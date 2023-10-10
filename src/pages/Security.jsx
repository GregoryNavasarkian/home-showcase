import React from 'react';
import { useNavigate } from 'react-router-dom';

const Security = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen'>
      <button onClick={() => navigate(-1)}>back</button>
      Security
    </div>
  )
}

export default Security;