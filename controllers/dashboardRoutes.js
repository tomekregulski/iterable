const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Blog, Comment } = require("../models");

router.get("/:id", withAuth, async (req, res) => {
  try {
    // const dbUserData = await User.findByPk(req.session.user_id);
    // const user = dbUserData.get({ plain: true });
    // const dbProjectData = await Project.findAll({
    //   order: [["name", "ASC"]],
    // });
    // const projects = dbProjectData.map((project) =>
    //   project.get({ plain: true })
    // );
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog, as: "blog_author" }],
    });

    const user = userData.get({ plain: true });

    // const blogData = await Blog.findByPk(req.params.id, {
    //   include: [
    //     {
    //       model: User,
    //       as: "blog_author",
    //       attributes: ["username"],
    //     },
    //   ],
    // });

    const blogData = await Blog.findByPk(req.params.id, {
      where: {
        user_id: 1,
      },
    });

    const userBlogs = blogData.get({ plain: true });

    // res.status(200).json(userBlogs);
    // res.render("dashboard", userBlogs);
    res.render("dashboard", {
      user,
      userBlogs,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
