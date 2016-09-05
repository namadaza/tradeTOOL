import React from 'react';
import CreatePostStore from '../stores/CreatePostStore';
import CreatePostActions from '../actions/CreatePostActions';

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = CreatePostStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    CreatePostStore.listen(this.onChange);
  }

  componentWillUnmount() {
    CreatePostStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var title = this.state.title.trim();
    var description = this.state.description.trim();
    var category = this.state.category;
    var price = this.state.price.trim();

    if (!title) {
      CreatePostActions.invalidTitle();
      this.refs.titleTextField.getDOMNode().focus();
    }

    if (!price) {
      CreatePostActions.invalidPrice();
      this.refs.priceTextField.getDOMNode().focus();
    }

    if (title && price) {
      CreatePostActions.createPost(title, description, category, price);
    }
  }

  render() {
    const wrapperStyle = {
      marginLeft: "10px",
      marginRight: "10px"
    }
    return (
      <div id='wrapper' style={wrapperStyle}>
        <div id='page-wrapper'>
          <div className='row flipInX animated'>
            <div class="col-lg-12">
              <div className='panel panel-default'>
                <div className='panel-heading'>Create Post</div>
                <div className='panel-body'>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className={'form-group ' + this.state.titleValidationState}>
                      <label className='control-label'>Title</label>
                      <input type='text' className='form-control' ref='titleTextField' value={this.state.title}
                        onChange={CreatePostActions.updateTitle} autoFocus/>
                      <span className='help-block'>{this.state.helpBlock}</span>
                    </div>
                    <div class="form-group">
                       <label for="description">Description</label>
                       <textarea class="form-control" value={this.state.description} rows="3"
                         onChange={CreatePostActions.updateDescription} />
                     </div>
                     <div class="form-group">
                       <label for="category">Category</label>
                       <select class="form-control" id="category" value={this.state.category}
                         onChange={CreatePostActions.updateCategory}>
                         <option></option>
                         <option>For Sale</option>
                         <option>For Free</option>
                         <option>Academic</option>
                         <option>Social</option>
                         <option>Athletic</option>
                         <option>Housing</option>
                       </select>
                     </div>
                     <div className={'form-group ' + this.state.priceValidationState}>
                       <div class="input-group">
                         <span class="input-group-addon">$</span>
                         <input type="text" class="form-control" value={this.state.price} placeholder="Price"
                           onChange={CreatePostActions.updatePrice} />
                       </div>
                      </div>
                    <p></p>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
