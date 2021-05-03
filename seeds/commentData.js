const sequelize = require("../config/connection");
const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    blog_id: 2,
    content: "Awesome, thanks for sharing!",
  },
  {
    user_id: 2,
    blog_id: 1,
    content: "Great perspective.",
  },
  {
    user_id: 1,
    blog_id: 1,
    content: "Glad you liked it!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
