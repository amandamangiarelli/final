import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';

export default class AddTopic extends React.Component{

  processFormData(event){
    event.preventDefault()
    let newTopic = event.target.formInputNameAttribute.value;
    let newLink = event.target.formInputLinkAttribute.value;
    if (newTopic){
      event.target.formInputNameAttribute.value = '';
      event.target.formInputLinkAttribute.value = '';
      UP_Collection_Access.insert({
        topic: newTopic,
        link: newLink,
        votes: 0,
      });

    };
  }

  render(){
    return (
      <div>
        <form className='form' onSubmit={this.processFormData.bind(this)}>
          <input className='form__input' type='text' name='formInputNameAttribute' placeholder='Post Title'/>
          <input className='form__input' type='text' name='formInputLinkAttribute' placeholder='Link (Optional)'/>
          <button className='button'>Add Topic</button>
        </form>
      </div>
    );
  }
};
