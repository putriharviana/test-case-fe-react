import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import 'bulma/css/bulma.min.css';

class App extends Component {
  render() {
    return (
      <div className="App px-6 mx-6 py-5">
          <PostForm />
          <AllPost />
      </div>
    );
  }
}
export default App;