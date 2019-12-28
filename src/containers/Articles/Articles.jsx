import React, { Component } from 'react';
import styles from './Articles.module.css';
import Article from '../../components/Article/Article';
import axios from 'axios'

class Articles extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything?q=cannabis&apiKey=56d6880c62074bfc9febc75010b7c545')
      .then(response => {
        this.setState({ articles: response.data.articles })
      })
  }

  render() {
    const articles = this.state.articles.map(article => {
      return <Article
        key={article.publishedAt}
        image={article.urlToImage}
        title={article.title}
        author={article.author}
        content={article.content}
        name={article.source.name}
        url={article.url}
      />;
    });

    return (
      <div className={styles.Content}>
        <div className={styles.BackgroundIMG}>
          <img
            className={styles.ImageLogo}
            src="https://fontmeme.com/permalink/191222/c729af1a4d96c297f05b224ccbd1d033.png" alt="Article"
          />
        </div>
        <div className={styles.Articles} id="content">
          {articles}
        </div>
      </div>
    )
  }
}

export default Articles;