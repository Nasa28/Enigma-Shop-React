import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';

const DashboardNav = () => {
  const [current, setCurrent] = useState('home');
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="main-nav">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="vertical">
        <Menu.Item key="home">
          <Link to="my-products">Your Products</Link>
        </Menu.Item>
        <Menu.Item key="product" className="float-right">
          <Link to="create-product">Add New Product</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default DashboardNav;
