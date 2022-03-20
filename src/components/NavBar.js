import { Link } from 'react-router-dom';
import ProductList from '../containers/ProductList';
import '../styles/NavBar.css';
// import '../styles/productList.css';

const NavBar = () => (
  <>
    <nav data-testid="nav" className="nav">
      <div>
        <Link className="heading" to="/" onClick={() => ProductList()}>
          <h1>Home</h1>
        </Link>
      </div>
      <div>
        <Link className="heading" to="/" onClick={() => ProductList()}>
          <h1>product Booking</h1>
        </Link>
      </div>
      <div>
        <Link className="heading" to="/About">
          <h3>About</h3>
        </Link>
      </div>
      <div>
        <Link className="heading" to="/" onClick={() => ProductList()}>
          <h1>Sign Up</h1>
        </Link>
      </div>
      <div>
        <Link className="heading" to="/" onClick={() => ProductList()}>
          <h1>Login</h1>
        </Link>
      </div>
    </nav>
  </>
);

export default NavBar;
