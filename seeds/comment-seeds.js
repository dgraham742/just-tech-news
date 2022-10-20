const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I love coding!!!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'This is great!.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'I finally understand!.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Can you explain this a little bit more?',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Ahhhh that make sense!.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Great job explaining this',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Hmmm I need to do more research on this',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Can you do a little bit more analasyis on this please?',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Great article!.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Makes sense to me!',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Still confused about this, can you explain a little bit more please?',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Awesome!',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Two thumbs up!',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'I really like this!',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Good job!',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Love it!',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'Absolutly loving this! It really is helping with my coding path',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Love coding',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'This is still a little bit confusing, can you point out a video explaining this a little bit more?',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'Great!',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Love it',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Good job!',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Great!',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'I write everything I see on little notecards and it really helps!',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'I go to sleep dreamng about coding now, lol!',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Anywhere else I can look for more information on this?',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Great!',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Super psyched about trying this out!',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Love it!',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'My brain hurts now! lol',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Great article',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Hmmm never thought about it like that',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Done, done, and done!',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'It looks a litte white to me',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'I wonder if I can try something like that?',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'love it!',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Cras in purus eu magna vulputate luctus.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;