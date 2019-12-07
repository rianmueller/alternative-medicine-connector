import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = props => (
  <nav className={styles.sideDrawer}>
    <ul>
      <li><a href='/home'>Home</a></li>
      <li><a href='/studies'>Studies</a></li>
      <li><a href='/articles'>Articles</a></li>
      <li><a href='/strains'>Strains</a></li>
      <li><a href='/chat'>Chat</a></li>
    </ul>
  </nav>
)

export default Sidebar;