import React from 'react';
import { Link } from 'react-router';
import { isEqual } from 'underscore';
import PostListStore from '../stores/PostListStore';
import PostListActions from '../actions/PostListActions';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = PostListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    PostListStore.listen(this.onChange);
    PostListActions.getPosts(this.props.params);
  }

  componentWillUnmount() {
    PostListStore.unlisten(this.onChange);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.params, this.props.params)) {
      PostListActions.getPosts(this.props.params);
    }
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    const imgStyle = {
      width: "100px",
      height: "100px"
    }
    const wrapperStyle = {
      marginLeft: "-10px",
      marginRight: "-10px",
      marginTop: "10px"
    }
    let postList = this.state.posts.map((post, index) => {
      return (
        <div id='wrapper' style={wrapperStyle}>
          <div key={post._id} className='list-group-item animated fadeIn'>
            <div className='media'>
              <span className='position pull-left'>{index + 1}</span>
              <div className='pull-left thumb-lg'>
                <img className='media-object' src='img/tt_icon_filled.png' style={imgStyle}/>
              </div>
              <div className='media-body'>
                <h4 className='media-heading'>
                  {post.title}
                </h4>
                <small>Description: <strong>{post.description}</strong></small>
                <br />
                <small>Category: <strong>{post.category}</strong></small>
                <br />
                <small>Price: <strong>${post.price}</strong></small>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='list-group'>
          {postList}
        </div>
      </div>
    );
  }
}
