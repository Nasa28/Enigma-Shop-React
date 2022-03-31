import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Product.css';

const Product = ({ id, title, image, price , slug}) => (
  <div className="" key={id}>
    <Link className="card " to={`/product/${slug}`}>
      <div>
        <img className="my-image" src={image} alt={title} />
      </div>
      <div>
        <h3 className="my-title">{title}</h3>
        <h3 className="title text-success">$ {price}</h3>
      </div>
    </Link>
  </div>
);

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Product;
