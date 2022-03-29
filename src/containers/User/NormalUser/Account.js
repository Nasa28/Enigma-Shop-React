import React from 'react';
import { Outlet } from 'react-router-dom';

import UserHeader from '../Dealer/UserHeader';
import CustomerNav from './CustomerNav';
const Account = () => {
  return (
    <>
      <div className="user-logo">
        <UserHeader />
      </div>
      <CustomerNav />
      <Outlet />
    </>
  );
};

export default Account;
