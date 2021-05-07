const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Blog, Comment } = require("../models");

// router.get("/", async (req, res) => {
//   try {
//     res.render("login");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    const blogData = await Blog.findAll({
      include: [
        {
          model: Comment,
          as: "blog_comments",
          attributes: ["content"],
        },
      ],
      where: {
        user_id: req.session.user_id,
      },
    });

    const userBlogs = blogData.map((blog) => blog.get({ plain: true }));

    // const commentData = await Comment.findAll({
    //   where: {
    //     blog_id: req.params.id,
    //   },
    // });

    // const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render("dashboard", {
      user,
      userBlogs,
      // logged_in: true,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
