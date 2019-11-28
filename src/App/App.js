import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './App.css';
import Header from '../containers/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log('[App.js] constructor');
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

<<<<<<< HEAD
=======
const mapStateToProps = () => {
  console.log('[App.js] mapStateToProps');
  return {}
}
const mapDispatchToProps = () => {
  console.log('[App.js] mapDispatchToProps');
  return {}
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

>>>>>>> 8e3db8dbd63f106ec06e59a808d8f3737f9a29d8
export default App;
