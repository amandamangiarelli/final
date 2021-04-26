import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import {UC_Collection_Access} from './../api/user_comments.js';

export default class AddComment extends React.Component{

  processFormData(event){
    event.preventDefault()
    let newName = event.target.formInputNameAttribute.value;
    let newComment = event.target.formInputNameAttribute.value;
    if (newComment){
      event.target.formInputNameAttribute.value = '';
      event.target.formInputCommentAttribute.value = '';
      UC_Collection_Access.insert({
        name: newName,
        comment: newComment,
      });

    };
  }

  render(){
    return (
      <div>
        <form className='commentForm' onSubmit={this.processFormData.bind(this)}>
          <input className='form__input3' type='text' name='formInputNameAttribute' placeholder='Name'/>
          <input className='form__input3' type='text' name='formInputCommentAttribute' placeholder='Add a comment...'/>
          <button className='button'>Add Comment</button>
        </form>
      </div>
    );
  }

};
