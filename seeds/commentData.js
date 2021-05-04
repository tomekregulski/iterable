const sequelize = require("../config/connection");
const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    blog_id: 2,
    comment_content: "Awesome, thanks for sharing!",
  },
  {
    user_id: 2,
    blog_id: 1,
    comment_content: "Great perspective.",
  },
  {
    user_id: 1,
    blog_id: 1,
    comment_content: "Glad you liked it!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
