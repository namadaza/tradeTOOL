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
      width: "150px",
      height: "150px"
    }
    const wrapperStyle = {
      marginLeft: "-10px",
      marginRight: "-10px",
      marginTop: "10px"
    }
    const priceStyle = {
      color: "green",
      float: "right"
    }
    const listgroupStyle = {
      marginLeft: "70px",
      marginRight: "40px",
      paddingTop: "5px"
    }
    const postinfoStyle = {
      display: "inline",
      float: "left"
    }
    let postList = this.state.posts.map((post, index) => {
      return (
        <div id='wrapper' style={wrapperStyle}>
          <div key={post._id} className='list-group-item animated fadeIn'>
            <div className='media'>
              <div className='pull-left thumb-lg'>
                <img className='media-object' src='img/tt_icon_filled.png' style={imgStyle}/>
              </div>
              <div className='media-body'>
                <div className="post-info" style={postinfoStyle}>
                  <h1 className='media-heading'>
                    <b>{post.title}</b>
                  </h1>
                  <h4><strong>{post.description}</strong></h4>
                  <br />
                  <small><strong>{post.category}</strong></small>
                  <br />
                </div>
                <div className='pull-right thumb-lg' style={priceStyle}>
                  <h1>${post.price}</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      );
    });

    return (
      <div className='list-group' style={listgroupStyle}>
        {postList}
      </div>
    );
  }
}
