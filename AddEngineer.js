import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './AddEngineer.css'; // Ensure path is correct

function AddEngineer() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/engineering'); // Navigate back to Engineering page
  };

  return (
    <div className="add-engineer-container">
      <h1>Add New Engineer</h1>
      {/* Add form or content for adding a new engineer here */}
      <button onClick={handleBackClick}>Back to Engineers</button>
    </div>
  );
}

export default AddEngineer;
