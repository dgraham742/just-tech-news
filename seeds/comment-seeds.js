const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I love this!!!!!!!.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'I tried to use Javascipt and was struggling, but now I get it and love it!.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Great, great work explaining this.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'I wish I had this when I was at first starting off..',
    user_id: 3,
    post_id: 18
  },

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;