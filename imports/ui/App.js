import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title.js';
import AddTopic from './AddTopic.js';
import PostList from './PostList.js';
import CommentList from './CommentList.js';
import RenderComment from './RenderComment.js';
import AddComment from './AddComment.js';
import Footer from './Footer.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Title
          title={this.props.passedPropTitle}
          creator={this.props.passedPropCreator}/>
          <AddTopic />
          <PostList passed_posts={this.props.passedPropAllPosts}/>
        <Footer footerText={this.props.passedFooter} />
      </>
    )
  }

};


App.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired,
};
