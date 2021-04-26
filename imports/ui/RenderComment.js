import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import {UC_Collection_Access} from './../api/user_comments.js';
import PropTypes from 'prop-types';

export default class RenderComment extends React.Component{

  render(){
    let single_item_class_name =
                `single-block-item-style
                single-block-item-style--position-${this.props.comment_prop_obj.rank}`;
    return (
      <>
        <div key={this.props.comment_prop_obj._id} className={single_item_class_name}>
          {/* below is a statement function */}
           <div className='post'>
            <div>
              <p className='post__stats'>
              {this.props.comment_prop_obj.votes}</p> {''/* single space before button hack */}
              <h3 className='post__topic'>{this.props.comment_prop_obj.topic}</h3>
            </div>

            <div className='post__actions'>
              <button className='button button--round' onClick={() => {
                UC_Collection_Access.update({_id: this.props.comment_prop_obj._id},
                  {$inc: {votes: 1}})}}>▲</button>
              <button className='button button--round' onClick={() => {
                UC_Collection_Access.update({_id: this.props.comment_prop_obj._id},
                  {$inc: {votes: -1}})}}>▼</button>
              <button className='button button--round' onClick={() => {
                UC_Collection_Access.remove({_id: this.props.comment_prop_obj._id})
              }}>X</button>
            </div>

          </div>
        </div>
      </>
    );
  }
};
RenderComment.propTypes = {
  comment_prop_obj: PropTypes.object
};
