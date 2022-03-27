import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import {
  UserAddOutlined,
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const NavBar = () => {
  const auth = useSelector((state) => state.authenticate);
  const [current, setCurrent] = useState('home');
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="mb-5 main-nav"
    >
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      {!auth.status && (
        <>
          <Menu.Item
            key="register"
            icon={<UserAddOutlined />}
            className="float-right"
          >
            <Link to="/verify-email">Register</Link>
          </Menu.Item>
          <Menu.Item
            key="login"
            icon={<UserOutlined />}
            className="float-right"
          >
            <Link to="/login">Login</Link>
          </Menu.Item>
        </>
      )}
      {auth.status && (
        <>
          <Menu.Item
            key="login"
            icon={<UserOutlined />}
            className="float-right"
          >
            <Link to="/logout">Logout</Link>
          </Menu.Item>

          <SubMenu
            key="SubMenu"
            icon={<SettingOutlined />}
            title={auth.firstName}
          >
            <Menu.ItemGroup title="Account">
              <Menu.Item key="setting:1">
                <Link to="/account">Profile</Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Link to="/password-reset">Change Password</Link>
              </Menu.Item>
            </Menu.ItemGroup>
            {(auth.role === 'dealer' || auth.role === 'admin') && (
              <Menu.ItemGroup title="Dashboard">
                <Menu.Item key="setting:3">
                  <Link to="/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="setting:4">
                  <Link to="/product/create-product">Post Product</Link>
                </Menu.Item>
                <Menu.Item key="setting:5">
                  <Link to="/update-product">Update Product</Link>
                </Menu.Item>
                <Menu.Item key="setting:6">
                  <Link to="/delete-product">Delete Product</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            )}
          </SubMenu>
        </>
      )}
      <Menu.Item key="cart" className="float-left">
        <Link to="/cart">{<ShoppingCartOutlined />}</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
