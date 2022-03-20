import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Product.css';

const Product = ({ id, title, image, price }) => (
  <div className="meal-card " data-testid="meal-card" key={id}>
    <Link className="cards " to={`/product/${id}`}>
      <div>
        <img className="image" src={image} alt={title} />
      </div>
      <div>
        <h3 className="title">{title}</h3>
        <h3 className="title">{price}</h3>
      </div>
    </Link>

    <div>
      <Link to={`/product/${id}`}>
        <button type="button" className="btn btn-primary">
          Book product
        </button>
      </Link>
    </div>
  </div>
);

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Product;
