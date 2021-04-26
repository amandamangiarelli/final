import React from 'react';
import RenderComment from './RenderComment.js';
import PropTypes from 'prop-types';

export default class CommentList extends React.Component {
  renderAllComments(){
    if (this.props.passed_comments.length === 0){
      return (
        <div>
          <p>
              No comments yet.
          </p>
        </div>
      );
    } else {
      return this.props.passed_comments.map((comment) => {
        return <RenderComment key={comment._id} comment_prop_obj={comment}/>
      });
    }

  }


  render(){
      return (
        <>
            {this.renderAllComments()}
        </>
      )
    }

};

CommentList.propTypes ={
  passed_comments: PropTypes.array.isRequired,
};
