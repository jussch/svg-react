/**
 * Created by Justin on 2016-03-19.
 */
import { Map, Record } from 'immutable';
import { MOVE_SHAPE, ADD_SHAPE } from '../actions/shape_actions';
import _ from 'lodash';

const initialState = new Map({});

export default function shapesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SHAPE:
      return state.set(_.uniqueId('shape_'), (new Shape()).set('type', action.shapeType));
    case MOVE_SHAPE:
      return state.update(action.id, (shape) => {
        return shape.update('x', x => x + action.x).update('y', y => y + action.y);
      });
    default:
      return state;
  }
}

const Shape = new Record({
  x: 20,
  y: 20,
  width: 100,
  height: 100,
  type: 'rect',
  style: new Map({
    fill: '#ccc',
    stroke: '#333',
  }),
});
