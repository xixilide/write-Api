import React, { PropTypes } from 'react'
import axios from 'axios';
import { Link } from 'react-router';

class New extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    console.log(title,content);
    axios.post('http://localhost:4000/posts',{title,content})
    .then((res) => {
      console.log(res);
    })
  }
  render () {
  return(
    <div>
      <div className="form-warp">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label">标题</label>
            <input type='text' name="title" ref="title" className="tit"/>
          </div>
          <div className="field">
            <label className="label">内容</label>
            <input type='text' name="content" ref="content" className="con"/>
          </div>
          <div className="actions">
            <button type="submit" className="button">提交</button>
            <Link to='/' className="cancel">取消</Link>
          </div>
        </form>
      </div>
    </div>
  )
  }
}

export default New;
