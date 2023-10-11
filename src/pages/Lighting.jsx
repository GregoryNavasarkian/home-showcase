import React from "react";
import { useNavigate } from "react-router-dom";

const Lighting = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full">
      <button onClick={() => navigate(-1)} className="">
        Go Back
      </button>
      <h1>Lighting</h1>
    </div>
  );
};

export default Lighting;
