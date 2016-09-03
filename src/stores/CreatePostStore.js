import alt from '../alt'
import CreatePostActions from '../actions/CreatePostActions';

class CreatePostStore {
  constructor() {
    this.bindActions(CreatePostActions);
    this.title = '';
    this.description = '';
    this.category = '';
    this.price = '';
    this.titleValidationState = '';
    this.priceValidationState = '';
  }

  onCreatePostSuccess(successMessage) {
    this.titleValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onCreatePostFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onInvalidTitle() {
    this.titleValidationState = 'has-error';
    this.helpBlock = 'No title no item lmao';
  }

  onInvalidPrice() {
    this.priceValidationState = 'has-error';
  }

  onUpdateTitle(event) {
    this.title = event.target.value;
    this.titleValidationState = '';
    this.helpBlock = '';
  }

  onUpdateDescription(event) {
    this.description = event.target.value;
  }

  onUpdateCategory(event) {
    this.category = event.target.value;
  }

  onUpdatePrice(event) {
    this.price = event.target.value;
    this.priceValidationState = '';
  }

}

export default alt.createStore(CreatePostStore);
