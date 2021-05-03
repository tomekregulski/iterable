const sequelize = require("../config/connection");
const seedUsers = require("./userData.js");
const seedBlogs = require("./blogData.js");
const seedComments = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedBlogs();
  await seedComments();
  process.exit(0);
};

seedAll();
