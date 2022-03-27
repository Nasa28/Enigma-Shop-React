import React from 'react';
import { useSelector } from 'react-redux';

const LoggedInUser = () => {
  const auth = useSelector((state) => state.authenticate);
  return <div>Hi, {`${auth.firstName}`}</div>;
};

export default LoggedInUser;
