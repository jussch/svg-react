/**
 * Created by Justin on 2016-03-19.
 */
import React, { Component } from 'react';

class Rectangle extends Component {
  render() {
    const shape = this.props.shape;
    return (
      <rect
        x={shape.get('x')}
        y={shape.get('y')}
        width={shape.get('width')}
        height={shape.get('height')}
        style={shape.get('style').toJS()}
      />
    );
  }
}

export default Rectangle;
