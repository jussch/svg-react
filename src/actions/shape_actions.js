/**
 * Created by Justin on 2016-03-19.
 */

export const MOVE_SHAPE = 'MOVE_SHAPE';
export function moveShape({ x, y, id }) {
  return { type: MOVE_SHAPE, x, y, id };
}

export const ADD_SHAPE = 'ADD_SHAPE';
export function addShape({ type }) {
  return { type: ADD_SHAPE, shapeType: type };
}
