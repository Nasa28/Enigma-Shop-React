import React, { useState } from 'react';
import { auth } from '../../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyEmail = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_API_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}, Click the link to complete registration`,
    );
    window.localStorage.setItem('emailForRegistration', email);
    setEmail('');
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ToastContainer />
          <h4>Verify your email</h4>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <button type="submit" className="btn btn-primary mt-3">
              Verify Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
