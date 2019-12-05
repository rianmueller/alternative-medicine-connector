import React from 'react';
import styles from './Header.module.css';

const header = props => (
  <div className={styles.Container}>
    <div
      className={styles.NavLink}
      onClick={props.navigationHandler}
    >
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
      <a className={styles.Login} href="/login">
        Login
          </a>
      <a className={styles.Register} href="/register">
        Register
          </a>
    </div>
  </div>
)

export default header;
