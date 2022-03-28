import React from 'react';
import { Outlet } from 'react-router-dom';

import DashboardNav from './Dealer/DashboardNav';
import UserHeader from './Dealer/UserHeader';
const Dashboard = () => {
  return (
    <>
      <div className="user-logo" >
        <UserHeader />
      </div>
      <DashboardNav />
      <Outlet />
    </>
  );
};

export default Dashboard;
