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
        this.actions.getAccountStatusSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getAccountStatusFail(jqXhr)
      });
  }

  findPosts(payload) {
    $.ajax({
      url: '/api/posts/search',
      data: { name: payload.searchQuery }
    })
      .done((data) => {
        assign(payload, data);
        this.actions.findPostsSuccess(payload);
      })
      .fail(() => {
        this.actions.findPostsFail(payload);
      });
  }

}

export default alt.createActions(HeaderActions);
