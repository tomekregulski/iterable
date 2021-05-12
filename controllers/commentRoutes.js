const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Blog, Comment } = require("../models");

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: User,
      //     as: "blog_author",
      //     attributes: ["username"],
      //   },
      //   {
      //     model: Comment,
      //     as: "blog_comments",
      //     include: {
      //       model: User,
      //       as: "comment_author",
      //       attributes: ["username"],
      //     },
      //   },
      // ],
    });

    const editSingleCommentData = commentData.get({ plain: true });
    res.render("edit-comment", {
      editSingleCommentData,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
