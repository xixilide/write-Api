import React, { PropTypes } from 'react'
import axios from 'axios';
class ShowPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      content:""
    }
  }
  componentWillMount() {
    axios.get(`http://localhost:4000/posts/${this.props.params.post_id}`).then(res => {

    this.setState({
        title: res.data.post.title,
        content:res.data.post.content
      })
  })
  .catch(res => {
      if (error.response) {
        console.log(error.response.data.error);
      } else {
        console.log(error.message);
      }
    });
}
  render () {
    return(
      <div className="post_warp">
        <div className="title">{this.state.title}</div>
        <div className="content">{this.state.content}</div>
      </div>
    )

  }
}

export default ShowPost;
