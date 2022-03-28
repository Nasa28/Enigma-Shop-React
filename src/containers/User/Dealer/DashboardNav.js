import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';

const DashboardNav = () => {
  const myProduct = useSelector((state) => state.myProducts.products);
  const auth = useSelector((state) => state.authenticate);

  const [current, setCurrent] = useState('home');
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="main-nav">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {(auth.role === 'dealer' || auth.role === 'dealer') && (
          <>
            <Menu.Item key="home">
              <Link to="my-products">Your Products ({myProduct.length})</Link>
            </Menu.Item>
            <Menu.Item key="product" className="float-right">
              <Link to="create-product">Add New Product</Link>
            </Menu.Item>
          </>
        )}
        <Menu.Item key="product" className="float-right">
          <Link to="browse-products">Browse Our Products</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default DashboardNav;
