const { Post } = require('../models');

const postdata = [
  {
    title: 'Javascript and you.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'Learning C## one step at a time.',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'Hard to argue that SQL can be difficult, but with these steps it might be easier.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Learning Bootstrap.',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
