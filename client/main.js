import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access, Calculate_rank_and_position_for_posts} from './../imports/api/user_posts.js';
import {UC_Collection_Access, Calculate_rank_and_position_for_comments} from './../imports/api/user_comments.js';
import App from './../imports/ui/App.js';
import './main.html';

Meteor.startup(() =>  {
  Tracker.autorun(() => {

    let allPostsInDB = UP_Collection_Access.find({/*empty so get all posts */},
                                                  {sort: {votes: -1}}).fetch();

    let allCommentsInDB = UC_Collection_Access.find({/*empty so get all comments */},
                                                {sort: {votes: -1}}).fetch();

    let title = 'Facebook';
    let positioned_posts = Calculate_rank_and_position_for_posts(allPostsInDB);
    let positioned_comments = Calculate_rank_and_position_for_comments(allCommentsInDB);

    ReactDOM.render(<App
        passedPropTitle={title}
        passedPropCreator={'Creator: Amanda'}
        passedPropAllPosts={allPostsInDB}
        passedPropAllPosts={positioned_posts}
        passedPropAllComments={allCommentsInDB}
        passedPropAllComments={positioned_comments}
        passedFooter={'\u00A9 Amanda Mangiarelli 2021'}
      />, document.getElementById('content'));
  });
});
