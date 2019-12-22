import React, { Component } from "react";
import styles from "./Register.module.css";
import { connect } from "react-redux";
import { actionsSubmitRegister, actionsOpenLogin } from "../../actions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
  }

  clearInput = () => {
    let defaultState = this.state;
    for (let index in defaultState) {
      defaultState[index] = "";
    }
    return this.setState(defaultState);
  };

  handleInput = event => {
    const { value, name } = event.target;
    const state = { ...this.state };
    state[name] = value;
    this.setState(state);
  };

  handleSubmitRegister = e => {
    console.log("Handle Register Submit");
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      return this.setState({ error: "Passwords must match" });
    } else {
      this.props.dispatchSubmitRegister(this.state);
      this.clearInput();
      return this.props.dispatchLogin();
    }
  };

  handleLoginClick = () => {
    return this.props.dispatchLogin();
  };

  render() {
    return (
      <div className={styles.register}>
        <form>
          <div className={styles.formInputDiv}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              placeholder="Name"
              className={styles.formInput}
            />
          </div>
          <div className={styles.formInputDiv}>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
              placeholder="Email"
              className={styles.formInput}
            />
          </div>
          <div className={styles.formInputDiv}>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
              placeholder="Password"
              className={styles.formInput}
            />
          </div>
          <div className={styles.formInputDiv}>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInput}
              placeholder="Confirm password"
              className={styles.formInput}
            />
          </div>
          <button
            className={styles.registerButton}
            onClick={this.handleSubmitRegister}
          >
            Register
          </button>
          <div>
            {this.state.error ? (
              <p className={styles.error}>{this.state.error}</p>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchSubmitRegister: formData => {
      console.log("dispatchSubmitRegister formData");
      console.log(formData);
      return dispatch(actionsSubmitRegister(formData));
    },
    dispatchLogin: () => {
      return dispatch(actionsOpenLogin());
    }
  };
};

Register = connect(null, mapDispatchToProps)(Register);

export default Register;
