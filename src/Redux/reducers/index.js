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
import fetchUsersReducer from './fetchUsersReducer';
import updateMeReducer from './updateMeReducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['myProducts', 'authenticate', 'login', 'product'],
};

const rootReducer = combineReducers({
  product: productReducer,
  detail: detailReducer,
  signup: registerReducer,
  authenticate: authenticateReducer,
  login: loginReducer,
  myProducts: myProductsReducer,
  newProduct: newProductReducer,
  getUser: fetchUsersReducer,
  updateMe: updateMeReducer,
});

export default persistReducer(persistConfig, rootReducer);
