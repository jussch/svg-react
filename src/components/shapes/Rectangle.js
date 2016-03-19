/**
 * Created by Justin on 2016-03-19.
 */
import React, { Component } from 'react';

class Rectangle extends Component {
  constructor(props) {
    super(props);

    // Bind here to avoid re-rendering.
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    e.preventDefault();

    this.props.onSelect({ event: e, id: this.props.shape.get('id') });
  }

  render() {
    const shape = this.props.shape;
    return (
      <rect
        className="svg-shape"
        x={shape.get('x')}
        y={shape.get('y')}
        width={shape.get('width')}
        height={shape.get('height')}
        style={shape.get('style').toJS()}
        onMouseDown={this.handleMouseDown}
      />
    );
  }
}

export default Rectangle;
