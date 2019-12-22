import React, { Component } from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import {
  actionsOpenRegister,
  actionsOpenLogin,
  actionsSubmitLogout
} from "../../actions";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBar: false
    };
    console.log("Header constructor");
  }

  handleLogout = () => {
    console.log("Handling Logout");
    return this.props.dispatchHandleLogout();
  };

  handleRegisterClick = () => {
    console.log("Handling Register");
    return this.props.dispatchRegister();
  };

  handleLoginClick = () => {
    console.log("Handling Login");
    return this.props.dispatchLogin();
  };

  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.NavLink} onClick={this.props.navigationHandler}>
          <div className={styles.Bar1}></div>
          <div className={styles.Bar2}></div>
          <div className={styles.Bar3}></div>
        </div>

        <div className={styles.Logo} href="/home">
          <a href="/">
            <img
              src="https://img.icons8.com/color/60/000000/marijuana-leaf.png"
              alt="logo"
            />
          </a>

          {/* <a href="https://icons8.com/icon/114318/cannabis">Cannabis icon by Icons8</a> */}
        </div>
        <div className={styles.Auth}>
          <div className={styles.register} onclick={this.handleRegisterClick}>
            Register
          </div>
          <div className={styles.login} onClick={this.handleLoginClick}>
            Login
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    session: localStorage.getItem("session")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchRegister: () => {
      console.log("Dispatch Handle Register");
      return dispatch(actionsOpenRegister());
    },
    dispatchLogin: () => {
      console.log("Dispatch Handle Login");
      return dispatch(actionsOpenLogin());
    },
    dispatchHandleLogout: () => {
      console.log("Dispatch Handle Logout");
      return dispatch(actionsSubmitLogout());
    }
  };
};

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

// const header = props => (
//   <div className={styles.Container}>
//     <div className={styles.NavLink} onClick={props.navigationHandler}>
//       <div className={styles.Bar1}></div>
//       <div className={styles.Bar2}></div>
//       <div className={styles.Bar3}></div>
//     </div>

//     <div className={styles.Logo} href="/home">
//       <a href="/">
//         <img
//           src="https://img.icons8.com/color/60/000000/marijuana-leaf.png"
//           alt="logo"
//         />
//       </a>

//       {/* <a href="https://icons8.com/icon/114318/cannabis">Cannabis icon by Icons8</a> */}
//     </div>
//     <div className={styles.Auth}>
//       <div className={styles.register} onclick={this.handleRegisterClick}>
//         Register
//       </div>
//       <div className={styles.login} onClick={this.handleLoginClick}>
//         Login
//       </div>
//     </div>
//   </div>
// );

export default Header;
