import { combineReducers } from 'redux';
import productReducer from './productReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import detailReducer from './detailReducer';
import authenticateReducer from './authenticateReducer';

const rootReducer = combineReducers({
  product: productReducer,
  detail: detailReducer,
  signup: registerReducer,
  authenticate: authenticateReducer,
  login: loginReducer,
});

export default rootReducer;
