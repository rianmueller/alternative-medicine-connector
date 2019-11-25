import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.NavLink}>
          <a href="/menu">
            <img
              src="https://img.icons8.com/material-rounded/48/000000/menu.png"
              alt="sidebar"
            />
          </a>
          {/* <a href="https://icons8.com/icon/83195/menu">Menu icon by Icons8</a> */}
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
          <a className={styles.Login} href="/login">
            Login
          </a>
          <a className={styles.Register} href="/register">
            Register
          </a>
        </div>
      </div>
    )
  }
}

export default Header;
