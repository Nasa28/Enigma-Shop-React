import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar';
import ProductList from '../containers/ProductList';
import ProductDetails from '../containers/ProductDetails';
import Error from './Error';
import About from './About';
import Register from '../containers/User/Register';
import Login from '../containers/User/Login';
import Logout from '../containers/User/Logout';
import VerifyEmail from '../containers/User/VerifyEmail';
import PostProduct from '../containers/User/Dealer/PostProduct';
import MyProducts from '../containers/User/Dealer/MyProducts';
import Dashboard from '../containers/User/Dashboard';
import DashboardHome from '../containers/User/Dealer/DashboardHome';
import Account from '../containers/User/NormalUser/Account';
import AccountHeader from '../containers/User/NormalUser/AccountHeader';
import Orders from '../containers/User/NormalUser/Orders';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/verify-email" element={<VerifyEmail />} />
          <Route exact path="/register/complete" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route exact path="browse-products" element={<ProductList />} />
            <Route path="my-products" element={<MyProducts />} />
            <Route path="create-product" element={<PostProduct />} />
          </Route>
          <Route path="account" element={<Account />}>
            <Route path="/account" element={<AccountHeader />} />
            <Route exact path="orders" element={<Orders />} />
          </Route>
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
