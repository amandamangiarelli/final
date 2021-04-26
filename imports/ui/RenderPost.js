import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import {UC_Collection_Access} from './../api/user_comments.js';
import CommentList from './CommentList.js';
import AddComment from './AddComment.js';
import PropTypes from 'prop-types';

export default class RenderPost extends React.Component{
  RenderPostFunction(){
    if(this.props.post_prop_obj.link === '') { //if theres no link
    return (
      <>
        <div key={this.props.post_prop_obj._id}>
          {/* below is a statement function */}
           <div className='post'>
            <div>
              <p className='post__stats'>Score:
              {this.props.post_prop_obj.votes}</p> {''/* single space before button hack */}
              <h3 className='post__topic'>{this.props.post_prop_obj.topic}</h3>
            </div>

            <div className='post__actions'>
              <button className='button button--round' onClick={() => {
                UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                  {$inc: {votes: 1}})}}>▲</button>
              <button className='button button--round' onClick={() => {
                UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                  {$inc: {votes: -1}})}}>▼</button>
              <button className='button button--round' onClick={() => {
                UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
              }}>X</button>
            </div>
          </div>
        </div>

        <div className='comment'>
          <h3>Comments</h3>

          <div className='comment_form'>
            <AddComment />
          </div>
        </div>
        </>
    );
  } else { //if we got a link
      return (
        <>
          <div key={this.props.post_prop_obj._id}>
            {/* below is a statement function */}
             <div className='post'>
              <div>
                <p className='post__stats'>Score:
                {this.props.post_prop_obj.votes}</p> {''/* single space before button hack */}
                <a className='post__links' href={this.props.post_prop_obj.link}>
                <h3 className='post__topic'>{this.props.post_prop_obj.topic}</h3></a>
              </div>

              <div className='post__actions'>
                <button className='button button--round' onClick={() => {
                  UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                    {$inc: {votes: 1}})}}>▲</button>
                <button className='button button--round' onClick={() => {
                  UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                    {$inc: {votes: -1}})}}>▼</button>
                <button className='button button--round' onClick={() => {
                  UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
                }}>X</button>
              </div>
            </div>
          </div>

          <div className='comment'>
            <h3>Comments</h3>

            <div className='comment_form'>
              <AddComment />
            </div>
          </div>
        </>
      );
} }


    render(){
        return (
          <>
              {this.RenderPostFunction()}
          </>
        )
      }

};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
  passedPropAllComments: PropTypes.array.isRequired,
};
