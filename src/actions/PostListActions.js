import alt from '../alt';

class PostListActions {
  constructor() {
    this.generateActions(
      'getPostsSuccess',
      'getPostsFail'
    );
  }

  getPosts(payload) {
    var url;
    var params;
    if (!payload.category) {
      url = 'api/posts/top';
    }
    else {
      url = 'api/posts';
      params = { category: payload.category };
    }

    $.ajax({
      url: url,
      data: params
    })
      .done((data) => {
        this.getPostsSuccess(data);
      })
      .fail((jqXhr) => {
        this.getPostsFail(jqXhr.responseJSON.message);
      });
  }

}

export default alt.createActions(PostListActions);
