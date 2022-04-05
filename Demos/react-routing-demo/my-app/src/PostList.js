import React from 'react';
import axios from 'axios';

export class PostList extends React.Component { // class-based component

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (
        <div>
            <h3>List of Posts:</h3>
            <ul>
                {
                this.state.posts
                    .map(post =>
                    <li key={post.id}>{post.title}</li>
                    )
                }
            </ul>
        </div>

    )
  }
}