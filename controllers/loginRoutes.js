const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", (req, res) => {
  // if a session exists and user is logged in, redirect them to their profile
  res.render("login");
});

module.exports = router;
