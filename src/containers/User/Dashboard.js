import React from 'react';
import DashboardNav from './Dealer/DashboardNav';
import MyProducts from './Dealer/MyProducts';
import PostProduct from './Dealer/PostProduct';

const Dashboard = () => {
  return (
    <>
      <h1 className="text-center">Dashboard</h1>

      <div className="sideBar">
        <div>
          <DashboardNav />
        </div>

        <div className="text-center">
          <h3 className="text-center">My Products List</h3>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
