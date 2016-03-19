/**
 * Created by Justin on 2016-03-18.
 */
require('../styles/svg-editor.scss');

import React, { Component } from 'react';
import Rectangle from './shapes/Rectangle';

class SVGEditor extends Component {
  constructor(props) {
    super(props);

    // Bind here to avoid re-rendering.
    this.handleAddShape = this.handleAddShape.bind(this);
  }

  handleAddShape(e) {
    e.preventDefault();
    this.props.actions.addShape({ type: 'rect' });
  }

  render() {
    const shapes = this.props.shapes;
    const shapeEls = shapes.map((shape, id) => {
      if (shape.type === 'rect') {
        return <Rectangle shape={shape} key={id} />;
      }
    }).toArray();

    return (
      <div className="svg-editor">
        <h1>SVG React</h1>
        <svg width="100%" height="100%" className="svg-container">
          {shapeEls}
        </svg>
        <div className="svg-editor-actions">
          <button onClick={this.handleAddShape}>Add Shape</button>
        </div>
      </div>
    );
  }
}

export default SVGEditor;
