const User = require("./User");
const Comment = require("./Comment");
const Blog = require("./Blog");

User.hasMany(Comment, {
  foreignKey: "user_id",
  as: "comment_author",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  as: "comment_author",
});

User.hasMany(Blog, {
  foreignKey: "user_id",
  as: "blog_author",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
  as: "blog_author",
});

Blog.hasMany(Comment, {
  foreignKey: "comment_id",
  as: "blog_comments",
});

Comment.belongsTo(Blog, {
  foreignKey: "comment_id",
  as: "blog_comments",
});

module.exports = { User, Comment, Blog };
