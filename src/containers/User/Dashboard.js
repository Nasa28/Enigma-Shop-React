import React from 'react';
import DashboardNav from './Dealer/DashboardNav';

const Dashboard = () => {
  
  return (
    <>
      <div>
        <h1 className="text-center">Dashboard</h1>
      </div>
      <DashboardNav />
      <div>
        <h3 className="text-center">My products</h3>
      </div>
    </>
  );
};

export default Dashboard;
