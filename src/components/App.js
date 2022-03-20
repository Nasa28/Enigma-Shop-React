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

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/register" element={<Register />} />
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
