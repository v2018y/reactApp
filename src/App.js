import React from 'react';
import { connect } from 'react-redux'
import * as actionsCre from './redux/action/index.js'
import Main from './components/Main';

class App extends React.Component {
  render() {
    return <Main />;
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, actionsCre)(App);
