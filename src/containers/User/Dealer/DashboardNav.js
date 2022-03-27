import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import {
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const DashboardNav = () => {
  const [current, setCurrent] = useState('home');
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="main-nav">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="vertical">
        <Menu.Item key="home">
          <Link to="my-products">My Products</Link>
        </Menu.Item>
        <Menu.Item
          key="product"
          icon={<UserAddOutlined />}
          className="float-right"
        >
          <Link to="create-product">Post Product</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default DashboardNav;
