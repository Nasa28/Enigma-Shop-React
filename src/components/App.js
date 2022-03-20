import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import authenticate from '../Redux/Actions/authenticate';
import NavBar from './NavBar';
import ProductList from '../containers/ProductList';
import ProductDetails from '../containers/ProductDetails';
import Error from './Error';
import About from './About';
import Register from '../containers/User/Register';
import Login from '../containers/User/Login';
import Logout from '../containers/User/Logout';
import VerifyEmail from '../containers/User/VerifyEmail';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('token'));
    if (user) {
      dispatch(
        authenticate({
          status: true,
          token: user.token,
          firstName: user.user.firstName,
          lastName: user.user.lastName,
        }),
      );
    } else {
      dispatch(authenticate());
    }
  });
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/verify-email" element={<VerifyEmail />} />
          <Route exact path="/register/complete" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
