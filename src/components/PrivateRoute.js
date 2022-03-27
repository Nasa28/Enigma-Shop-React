import { Navigate } from 'react-router';
import Dashboard from '../containers/User/Dashboard';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const auth = useSelector((state) => state.authenticate);;
  return auth && auth.token ? <Dashboard /> : <Navigate to="/login" />;
};

export default PrivateRoute;
