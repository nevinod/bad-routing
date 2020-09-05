import React from 'react';
import Home from './components/Home'
import Comments from './components/Comments'
import Posts from './components/Posts'

class App extends React.Component {
  state = { home: true, comments: false, posts: false }

  choosePage = (page) => {
    switch(page) {
      case 'home':
        this.setState({home: true, comments: false, posts: false})
        break;
      case 'comments':
        this.setState({home: false, comments: true, posts: false})
        break;
      case 'posts':
        this.setState({home: false, comments: false, posts: true})
    }
  }

  render() {
    return (
        <div className="App">
          <div style={{display: "flex", flexDirection: "row", cursor: "pointer", justifyContent: "space-between", width: "20%"}}>
            <h4 onClick={() => this.choosePage('home')}>Home  </h4>
            <h4 onClick={() => this.choosePage('comments')}>Comments  </h4>
            <h4 onClick={() => this.choosePage('posts')}>Posts  </h4>
          </div>


          {this.state.comments && <Comments />}
          {this.state.posts && <Posts />}
          {this.state.home && <Home />}
        </div>
    );
  }
}

export default App;
