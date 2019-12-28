import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = props => (
  <div className={styles.sideDrawer}>
    <div className={styles.Home}>
      <a href="/">Home</a>
    </div>
    <div className={styles.Studies}>
      <a href="/studies">Studies</a>
    </div>
    <div className={styles.Articles}>
      <a href="/articles">Articles</a>
    </div>
    <div className={styles.Chat}>
      <a href="/chat">Chat</a>
    </div>
  </div>
);

export default Sidebar;
