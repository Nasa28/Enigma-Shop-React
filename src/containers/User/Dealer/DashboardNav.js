import React from 'react';
import { Link } from 'react-router-dom';
import MyProducts from './MyProducts';
import '../../../styles/NavBar.css';

const DashboardNav = () => {
  return (
    <>
      <nav className=" container-fluid">
        <div className="dashboard">
          <ul>
            <Link to="/product/create-product" className="ml-4">
              Post Product
            </Link>
          </ul>
          
          <ul>
            <Link
              to="/my-products"
              className="ml-4"
              onClick={() => MyProducts()}
            >
              My products
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default DashboardNav;
