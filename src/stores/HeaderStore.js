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
}

export default alt.createStore(HeaderStore);
