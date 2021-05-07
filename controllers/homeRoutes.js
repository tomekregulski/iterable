const router = require("express").Router();
const { User, Blog } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          as: "blog_author",
          attributes: ["username"],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      usersame: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    } else {
      res.status(200).render("login");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.status(200).render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/logout", async (req, res) => {
  try {
    res.status(200).json("Logged out!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
