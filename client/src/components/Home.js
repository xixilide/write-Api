import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';

class Home extends Component {
  constructor(){
    super();
    this.state={
      data: []
    }
  }
  componentWillMount(){
    axios.get('http://localhost:4000/posts')
      .then( res => this.setState({data:res.data.posts}) )
  }
  render(){
    let postList = this.state.data.map( (post,i) => (
      <div key={i} className='post-card'>
        <h3>{post.title}</h3>
          <div>
          <Link to={`/posts/${post._id}`} className="btn1" >查看</Link>
        </div>
      </div>
    ) )
    return(
      <div>
        {postList}
        <Link to='/new'>添加新文章</Link>
      </div>
    )
  }
}

export default Home;
