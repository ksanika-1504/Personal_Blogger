import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Ensure to import your CSS file here

const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/createBlog');
  };

  return (
    <div className="dashboard-container">
      <button onClick={handleButtonClick} className="button-name">
        Add
      </button>
    </div>
  );
};

export default Dashboard;

