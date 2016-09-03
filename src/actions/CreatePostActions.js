import alt from '../alt';
import { assign } from 'underscore';

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
        this.actions.createPostSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.createPostFail(jqXhr.responseJSON.message);
      });
  }

}

export default alt.createActions(CreatePostActions);
