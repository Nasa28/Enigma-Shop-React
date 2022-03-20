import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoggedInUser from '../containers/User/LoggedInUser';
import '../styles/NavBar.css';

const NavBar = () => {
  const auth = useSelector((state) => state.authenticate);

  return (
    <div data-testid="nav">
      <nav className="">
        <div className="container nav">
          <h2 className="">
            <Link to="/" className="logo">
              Home
            </Link>
          </h2>

          <ul className="">
            <Link to="/products" className=" ml-4">
              Products
            </Link>
          </ul>
          {/* <ul>
            <Link to="/favourites" className=" ml-4">
              <FetchFav />
            </Link>
          </ul> */}
          {!auth.status && (
            <div className="d-flex">
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
            </div>
          )}

          <ul className="ml-4">{auth.status && <LoggedInUser />}</ul>
          <ul>
            {auth.status && (
              <Link to="/logout" className="ml-4">
                Logout
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
