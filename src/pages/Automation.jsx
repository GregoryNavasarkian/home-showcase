import React from 'react'
import { useNavigate } from 'react-router';

const Automation = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen'>
      <button onClick={() => navigate(-1)}>back</button>
      Automation
    </div>
  )
}

export default Automation;