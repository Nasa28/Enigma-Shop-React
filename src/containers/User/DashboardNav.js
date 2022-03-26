import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNav = () => {
  const active = window.location.pathname;
  console.log(active)
  return (
    <>
      <nav className=" dashboardNav">
        <div className="container-fluid">
          <ul className="dashboard">
            <Link to="/product/create-product" className=" ml-4">
              Post Product
            </Link>

            <Link to="/signup" className=" ml-4">
              Sign Up
            </Link>

            <Link to="/login" className="ml-4">
              Login
            </Link>

            <Link to="/logout" className="ml-4">
              Logout
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default DashboardNav;
