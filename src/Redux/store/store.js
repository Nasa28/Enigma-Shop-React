// import { createStore } from 'redux';
// import rootReducer from '../reducers';

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;

import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const persistor = persistStore(store);
export { store, persistor };
