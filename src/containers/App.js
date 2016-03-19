/**
 * Created by Justin on 2016-03-18.
 */

import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { addShape, moveShape } from '../actions/shape_actions';

class App extends Component {
  render() {
    return (
      <Main {...this.props}/>
    );
  }
}

App.propTypes = {};
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    addShape,
    moveShape,
  };

  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
