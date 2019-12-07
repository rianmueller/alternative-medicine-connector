import React, { Component } from 'react';
import styles from './Articles.module.css';
import Article from '../../components/Article/Article';
import axios from 'axios'

class Articles extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything?q=cannabis&apiKey=56d6880c62074bfc9febc75010b7c545')
      .then(response => {
        this.setState({ posts: response.data.articles })
      })
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Article
        image={post.urlToImage}
        title={post.title}
        author={post.author}
        content={post.content}
      />;
    });

    return (
      <div className={styles.Articles} id="content">
        {posts}
      </div>
    )
  }
}

export default Articles;