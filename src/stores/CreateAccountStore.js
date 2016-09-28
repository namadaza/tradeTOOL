import alt from '../alt';
import CreateAccountActions from '../actions/CreateAccountActions';

class CreateAccountStore {
  constructor() {
    this.bindActions(CreateAccountActions);
    this.name = '';
    this.email = '';
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }

  onCreateAccountSuccess(successMessage) {
    this.titleValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onCreateAccountFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }
}

export default alt.createStore(CreateAccountStore);
