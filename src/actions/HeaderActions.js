import alt from '../alt';
import { assign } from 'underscore';

class HeaderActions {
  constructor() {
    this.generateActions(
      'getAccountStatusSuccess',
      'getAccountStatusFail',
      'findPostsSuccess',
      'findPostsFail',
      'updateSearchQuery',
      'updateAjaxAnimation',
      'updateOnlineUsers'
    );
  }

  getAccountStatus() {
    $.ajax({ url: '/api/accountStatus' })
      .done((data) => {
        this.getAccountStatusSuccess(data)
      })
      .fail((jqXhr) => {
        this.getAccountStatusFail(jqXhr)
      });
  }

  findPosts(payload) {
    $.ajax({
      url: '/api/posts/search',
      data: { name: payload.searchQuery }
    })
      .done((data) => {
        assign(payload, data);
        this.findPostsSuccess(payload);
      })
      .fail(() => {
        this.findPostsFail(payload);
      });
  }

}

export default alt.createActions(HeaderActions);
