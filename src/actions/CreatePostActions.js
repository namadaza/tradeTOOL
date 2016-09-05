import alt from '../alt';

class CreatePostActions {
  constructor() {
    this.generateActions(
      'createPostSuccess',
      'createPostFail',
      'invalidTitle',
      'invalidPrice',
      'updateTitle',
      'updateDescription',
      'updateCategory',
      'updatePrice'
    );
  }

  createPost(title, description, category, price) {
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
        this.createPostSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.createPostFail(jqXhr.responseJSON.message);
      });
  }

}

export default alt.createActions(CreatePostActions);
