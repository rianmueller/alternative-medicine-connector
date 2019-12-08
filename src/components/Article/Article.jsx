import React from 'react';
import styles from './Article.module.css';

const article = (props) => (
  < article className={styles.Article}>
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <img src={props.image} alt="article" className={styles.Image} />
      <div className={styles.Title}>{props.title}</div>
      <h5 className={styles.Author}> by <span>{props.author}</span> | <span className={styles.Source}>{props.name}</span></h5>
      <h4 className={styles.Content}>{props.content}</h4>
    </a>
  </article >
)

export default article;