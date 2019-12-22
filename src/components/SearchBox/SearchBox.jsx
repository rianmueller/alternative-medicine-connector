import React from 'react';
import styles from './SearchBox.module.css';

const searchBox = props => (
  <div className={styles.SearchBox}>
    <input
      onChange={props.handleInput}
      type="text"
      placeholder="Search"
    />
  </div>
)

export default searchBox;