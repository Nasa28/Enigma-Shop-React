import React from 'react';
import { Outlet } from 'react-router-dom';

import DashboardNav from './Dealer/DashboardNav';
const Dashboard = () => {
  return (
    <>
      <h1 className="text-center">Dashboard</h1>
      <DashboardNav />
      <Outlet />
    </>
  );
};

export default Dashboard;
