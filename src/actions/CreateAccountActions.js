import alt from '../alt';

class CreateAccountActions {
  constructor() {
    this.generateActions(
      'CreateAccountSuccess',
      'CreateAccountFail',
    );
  }

  CreateAccount(title, description, category, price) {
    $.ajax({
      type: 'POST',
      url: '/api/posts',
      data: { title: title,
              description: description,
              category: category,
              price: price
      }
    })
      .done((data) => {
        this.CreateAccountSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.CreateAccountFail(jqXhr.responseJSON.message);
      });
  }

}

export default alt.createActions(CreateAccountActions);
