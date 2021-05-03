const sequelize = require("../config/connection.js");
const { Comment } = require("../models");

const commentData = [
  {
    userId: 1,
    postId: 2,
    commentContent: "Awesome, thanks for sharing!",
  },
  {
    userId: 2,
    postId: 1,
    commentContent: "Great perspective.",
  },
  {
    userId: 1,
    postId: 1,
    commentContent: "Glad you liked it!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
