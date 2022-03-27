import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoggedInUser from '../containers/User/LoggedInUser';
import '../styles/NavBar.css';
import DashboardNav from '../containers/User/Dealer/DashboardNav';

const NavBar = () => {
  const auth = useSelector((state) => state.authenticate);
  console.log(auth);
  return (
    <div data-testid="nav">
      <nav className="">
        <div className=" nav">
          <ul className="">
            <Link to="/" className="ml-4">
              Home
            </Link>
          </ul>

          <ul className="">
            <Link to="/products" className=" ml-4">
              Products
            </Link>
          </ul>

          {!auth.status && (
            <>
              <ul className="">
                <Link to="/verify-email" className=" ml-4">
                  Register
                </Link>
              </ul>
              <ul className="">
                <Link to="/login" className="ml-4">
                  Login
                </Link>
              </ul>
            </>
          )}

          <ul className="ml-4">{auth.status && <LoggedInUser />}</ul>
          {auth.status && (
            <ul>
              <Link to="/product/my-profile" className="ml-4">
                Profile
              </Link>
            </ul>
          )}
          {auth.status && (
            <>
              <ul>
                <Link to="/logout" className="ml-4">
                  Logout
                </Link>
              </ul>
            </>
          )}

          <u className="last-nav ml-4">
            {(auth.role === 'dealer' || auth.role === 'admin') && (
              <DashboardNav />
            )}
          </u>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
