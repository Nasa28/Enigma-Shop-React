import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Product.css';

const product = ({ id, name, image, price }) => (
  <div className="meal-card " data-testid="meal-card" key={id}>
    <Link className="cards " to={`/product/${id}`}>
      <div>
        <img className="image" src={image} alt={name} />
      </div>
      <div>
        <h3 className="title">{name}</h3>
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

product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default product;
