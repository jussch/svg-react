/**
 * Created by Justin on 2016-03-18.
 */
const redux = require('redux');
const thunk = require('redux-thunk');
const reducers = require('../reducers');

module.exports = function(initialState) {
  const store = redux.createStore(
    reducers,
    initialState,
    redux.applyMiddleware(thunk)
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
