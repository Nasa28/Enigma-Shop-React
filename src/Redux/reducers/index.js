import { combineReducers } from 'redux';
import productReducer from './productReducer';

import detailReducer from './detailReducer';

const rootReducer = combineReducers({
  product: productReducer,
  detail: detailReducer,
});

export default rootReducer;
