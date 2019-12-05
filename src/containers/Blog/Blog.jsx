import React, { Component } from 'react';
import styles from './Blog.module.css';
import Post from '../../components/Post/Post';
import axios from 'axios'

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything?q=cannibis&apiKey=56d6880c62074bfc9febc75010b7c545')
      .then(response => {
        this.setState({ posts: response.data.articles })
      })
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post
        image={post.urlToImage}
        title={post.title}
        author={post.author}
        content={post.content}
      />;
    });

    return (
      <div className={styles.Blog} id="content">
        {posts}
      </div>
    )
  }
}

export default Blog;