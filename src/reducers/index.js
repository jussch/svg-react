/**
 * Created by Justin on 2016-03-18.
 */

import { combineReducers } from 'redux';

const reducers = {
  cat(a) { return a || {}; },
};

module.exports = combineReducers(reducers);
