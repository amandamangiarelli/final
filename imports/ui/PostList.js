import React from 'react';
import RenderPost from './RenderPost.js';
import RenderComment from './RenderComment.js';
import PropTypes from 'prop-types';

export default class PostList extends React.Component {
  renderAllPosts(){
    if (this.props.passed_posts.length === 0){
      return (
        <div>
          <p>
              Add a new post.
          </p>
        </div>
      );
    } else {
      return this.props.passed_posts.map((post) => {
        return <RenderPost key={post._id} post_prop_obj={post}/>
      });
    }

  }

  render(){
      return (
        <>
            {this.renderAllPosts()}
        </>
      )
    }

};

PostList.propTypes ={
  passed_posts: PropTypes.array.isRequired,
};
