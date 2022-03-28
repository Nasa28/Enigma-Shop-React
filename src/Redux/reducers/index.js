import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from './productReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import detailReducer from './detailReducer';
import authenticateReducer from './authenticateReducer';
import myProductsReducer from './myProductsReducer';
import newProductReducer from './newProductReducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['myProducts', 'authenticate', 'login'],
};

const rootReducer = combineReducers({
  product: productReducer,
  detail: detailReducer,
  signup: registerReducer,
  authenticate: authenticateReducer,
  login: loginReducer,
  myProducts: myProductsReducer,
  newProduct: newProductReducer,
});

export default persistReducer(persistConfig, rootReducer);
