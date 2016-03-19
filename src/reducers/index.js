/**
 * Created by Justin on 2016-03-18.
 */

import { combineReducers } from 'redux';
import shapesReducer from './shapes';

const reducers = {
  shapes: shapesReducer,
};

module.exports = combineReducers(reducers);
