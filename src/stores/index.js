/**
 * Created by Justin on 2016-03-18.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const reducers = require('../reducers');

module.exports = function(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer)
    });
  }

  return store
};
