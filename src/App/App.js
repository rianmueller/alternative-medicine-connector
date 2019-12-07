import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Backdrop from '../components/Backdrop/Backdrop';
import Articles from '../containers/Articles/Articles';

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
  };

  backdropHandler = () => {
    this.setState({ navBar: false });
  }

  render() {
    let navigation;
    let backdrop;

    if (this.state.navBar) {
      navigation = <Sidebar />
      backdrop = <Backdrop click={this.backdropHandler} />
    }
    return (
      <div
        className="App"
        style={{ height: '100%' }}
      >
        <Header
          navigationHandler={this.navigationHandler}
        />
        <content>
          <Articles />
        </content>
        {navigation}
        {backdrop}
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
