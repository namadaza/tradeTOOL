import alt from '../alt';

class HeaderActions {
  constructor() {
    this.generateActions(
      'getAccountStatus'
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
}

export default alt.createActions(HeaderActions);
