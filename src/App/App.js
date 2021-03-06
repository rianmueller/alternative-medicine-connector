import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Backdrop from "../components/Backdrop/Backdrop";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../routes/index";
import { withRouter } from "react-router";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBar: false
    };
  }

  navigationHandler = () => {
    this.setState(prevState => {
      return { navBar: !prevState.navBar };
    });
  };

  backdropHandler = () => {
    this.setState({ navBar: false });
  };

  render() {
    let navigation;
    let backdrop;

    if (this.state.navBar) {
      navigation = <Sidebar />;
      backdrop = <Backdrop click={this.backdropHandler} />;
    }
    return (
      <Router>
        <main className="App">
          <Header navigationHandler={this.navigationHandler} />
            <Routes />
          {navigation}
          {backdrop}
        </main>
      </Router>
    );
  }
}

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = () => {
  return {};
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(App);
