const withAuth = require("../utils/auth");

const router = require("express").Router();
const { User, Blog } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await Blog.findAll({
      order: [["name", "ASC"]],
    });

    const blogs = userData.map((blog) => blog.get({ plain: true }));
    // res.render('homepage');
    res.render("homepage", {
      blogs,
      // Passing the logged in attribute flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id);

    const blog = dbBlogData.get({ plain: true });

    res.render("blog", { blog });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profile/", withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id);

    const user = dbUserData.get({ plain: true });

    // const dbProjectData = await Project.findAll({
    //   order: [["name", "ASC"]],
    // });

    // const projects = dbProjectData.map((project) =>
    //   project.get({ plain: true })
    // );

    res.render("profile", { user });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // if a session exists and user is logged in, redirect them to their profile
  if (req.session.logged_in) {
    res.redirect("profile");
    return;
  }

  res.render("login");
});

module.exports = router;
