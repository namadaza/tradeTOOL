import alt from '../alt'
import PostListActions from '../actions/PostListActions';

class PostListStore {
  constructor() {
    this.bindActions(PostListActions);
    this.posts = [];
  }

  onGetPostsSuccess(data) {
    this.posts = data;
  }

  onGetPostsFailure(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(PostListStore);
