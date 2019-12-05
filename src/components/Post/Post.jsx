import React from 'react';
import styles from './Post.module.css';

const post = (props) => (
  < article className={styles.Article} >
    <img src={props.image} alt="article" className={styles.Image} />
    <h3 className={styles.Title}>{props.title}</h3>
    <div className={styles.Author}> by <span>{props.author}</span></div>
    <p className={styles.Content}>{props.content}</p>
  </article >
)

export default post;