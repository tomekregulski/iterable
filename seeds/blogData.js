const sequelize = require("../config/connection");
const { Blog } = require("../models");

const blogData = [
  {
    user_id: 1,
    title: "Blog1",
    content: "Lorem ipsum dolor.",
  },
  {
    user_id: 2,
    title: "Blog2",
    content: "Lorem ipsum dolor.",
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
