const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/user');
const Post = require('./models/post');
const Comment = require('./models/comment');

const url = process.env.MONGO_URI;
mongoose
  .connect(url)
  .then(() => {
    console.log('mongoDB connected');
    // insertPosts();
    // insertUsers();
    // insertComments();
    query();
  })
  .catch((err) => {
    console.log(err);
  });

const insertPosts = () => {
  Post.insertMany([
    {
      username: 'GoodGuyGreg',
      title: 'Passes out at party',
      body: 'Wakes up early and cleans house',
    },
    {
      username: 'GoodGuyGreg',
      title: 'Steals your identity',
      body: 'Raises your credit score',
    },

    {
      username: 'GoodGuyGreg',
      title: 'Reports a bug in your code',
      body: 'Sends you a Pull Request',
    },

    {
      username: 'ScumbagSteve',
      title: 'Borrows something',
      body: 'Sells it',
    },

    {
      username: 'ScumbagSteve',
      title: 'Borrows everything',
      body: 'The end',
    },

    {
      username: 'ScumbagSteve',
      title: 'Forks your repo on github',
      body: 'Sets to private',
    },
  ]);
};

const insertUsers = async () => {
  await User.insertMany([
    { username: 'GoodGuyGreg', first_name: 'Good Guy', last_name: 'Greg' },
    { username: 'ScumbagSteve', first_name: 'Scumbag', last_name: 'Steve' },
  ]);
};

const insertComments = () => {
  Comment.insertMany([
    {
      username: 'GoodGuyGreg',
      comment: 'Hope you got a good deal!',
      post: '618e5143ba4dd92cd88603eb',
    },
    {
      username: 'GoodGuyGreg',
      comment: "What's mine is yours!",
      post: '618e5143ba4dd92cd88603ec',
    },
    {
      username: 'GoodGuyGreg',
      comment: "Don't violate the licensing agreement!",
      post: '618e5143ba4dd92cd88603ed',
    },
    {
      username: 'ScumbagSteve',
      comment: "It still isn't clean",
      post: '618e5143ba4dd92cd88603e8',
    },
    {
      username: 'ScumbagSteve',
      comment: 'Denied your PR cause I found a hack',
      post: '618e5143ba4dd92cd88603ea',
    },
  ]);
};
const query = async () => {
  // find all users
  await User.find({});
  // find all posts
  await Post.find({});
  // find all posts that was authored by "GoodGuyGreg"
  await Post.find({ username: 'GoodGuyGreg' });
  // find all posts that was authored by "ScumbagSteve"
  await Post.find({ username: 'ScumbagSteve' });
  // find all comments
  await Comment.find({});
  // find all comments that was authored by "GoodGuyGreg"
  await Comment.find({ username: 'GoodGuyGreg' });
  // find all comments that was authored by "ScumbagSteve"
  await Comment.find({ username: 'ScumbagSteve' });
  // find all comments belonging to the post "Reports a bug in your code"
  const wantedPostId = (await Post.find({ post: 'Reports a bug in your code' }))
    ._id;

  console.log(await Comment.find({ post: wantedPostId }));
};
