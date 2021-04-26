import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const UC_Collection_Access = new Mongo.Collection('user_comments_collection');

export const Calculate_rank_and_position_for_comments = (user_comments_collection) => {
    let rank = 1;

    return user_comments_collection.map((comment, index) => {
      if(index !== 0 && user_comments_collection[index - 1].votes > comment.votes) {
        rank++;
      }

      return {
        ...comment,
        rank,
        position: numeral(rank).format('0o'),
      };
    });
};
