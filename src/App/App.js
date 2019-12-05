import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBar: false
    }
    console.log('[App.js] constructor');
  }

  navigationHandler = () => {
    this.setState((prevState) => {
      return { navBar: !prevState.navBar }
    })
  }

  render() {
    let navigation;
    if (this.state.navBar) {
      navigation = <Navigation />
    }
    return (
      <div
        className="App"
        style={{ height: '100%' }}
      >
        <Header
          navigationHandler={this.navigationHandler}
        />
        {navigation}
        <main>
          <p>MAIN CONTENT</p>
        </main>
      </div>
    )
  }
}

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

export default App;
