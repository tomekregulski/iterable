const sequelize = require("../config/connection.js");
const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    email: "sal@hotmail.com",
    username: "sal2k",
    password: "asdfghjkl",
  },
  {
    email: "jordanv@email.com",
    username: "jordonit",
    password: "12345678",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
