const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", (req, res) => {
  // if a session exists and user is logged in, redirect them to their profile
  if (req.session.logged_in) {
    res.redirect("dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
