import React from 'react';
import styles from './Study.module.css';

const study = (props) => (
  <div className={styles.Study}>
    <div className={styles.Container}>
      <a href={"https://www.doi.org/" + props.doi} target="_blank" rel="noopener noreferrer">
        <h2 className={styles.Name}>{props.name}</h2>
        <p className={styles.Content}>{props.content}</p>
        <p className={styles.Condition}>{props.condition}</p>
      </a>
    </div>
  </div>
)

export default study;