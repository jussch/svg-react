/**
 * Created by Justin on 2016-03-18.
 */

import React, { Component } from 'react';
import SVGEditor from './SVGEditor';

class Main extends Component {
  render() {
    return (
      <div>
        <SVGEditor {...this.props} />
      </div>
    );
  }
}

export default Main;
