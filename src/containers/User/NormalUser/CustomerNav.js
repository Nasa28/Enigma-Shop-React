import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';

const CustomerNav = () => {
  const auth = useSelector((state) => state.authenticate);

  const [current, setCurrent] = useState('home');
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="main-nav">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="browse-product" className="float-right">
          <Link to="browse-products">Browse Our Products</Link>
        </Menu.Item>
        {auth.role === 'user' && (
          <Menu.Item key="orders" className="float-right">
            <Link to="orders">Orders</Link>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
};

export default CustomerNav;
