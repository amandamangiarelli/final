import { Meteor } from 'meteor/meteor';
import { UP_Collection_Access } from './../imports/api/user_posts.js';
import { UC_Collection_Access } from './../imports/api/user_comments.js';

//Meteor.startup(() => {
Meteor.startup(function() {
  UC_Collection_Access.insert ({
    name: 'person',
    comment: 'comment test',
  });

console.log(UC_Collection_Access.find().fetch());

});
