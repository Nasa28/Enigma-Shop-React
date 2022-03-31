import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';

const DashboardNav = () => {
  const auth = useSelector((state) => state.authenticate);

  const [current, setCurrent] = useState('home');
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="main-nav">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {(auth.role === 'dealer' || auth.role === 'admin') && (
          <>
            <Menu.Item key="my-product">
              <Link to="my-products">Your Products</Link>
            </Menu.Item>
            <Menu.Item key="product" className="float-right">
              <Link to="create-product">Add New Product</Link>
            </Menu.Item>
          </>
        )}
        {auth.role === 'user' && (
          <Menu.Item key="orders" className="float-right">
            <Link to="orders">Orders</Link>
          </Menu.Item>
        )}
        {auth.role === 'admin' && (
          <>
            <Menu.Item key="users" className="float-right">
              <Link to="users">All Users</Link>
            </Menu.Item>
            <Menu.Item key="orders" className="float-right">
              <Link to="users"></Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
};

export default DashboardNav;
