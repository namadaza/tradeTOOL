import alt from '../alt'
import HeaderActions from '../actions/HeaderActions';

class HeaderStore {
  constructor() {
    this.bindActions(HeaderActions);
    this.userLoggedIn = false;
  }

  onGetAccountStatusSuccess(data) {
    this.userLoggedIn = data;
  }

  onGetAccountStatusFail(jqXhr) {
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }

  onFindPostsSuccess(payload) {
    payload.history.pushState(null, '/posts/' + payload.postId); //transition state to post's page
  }

  onFindPostsFail(jqXhr) {
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fade in or fade out
  }

  onUpdateSearchQuery(event) {
    this.searchQuery = event.target.value;
  }

  onUpdateOnlineUsers(data) {
    this.onlineUsers = data.onlineUsers;
  }
}

export default alt.createStore(HeaderStore);
