const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Blog, Comment } = require("../models");

router.get("/create", async (req, res) => {
  try {
    res.render("new-blog", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "blog_author",
          attributes: ["username", "id"],
        },
      ],
    });

    const singleBlogData = blogData.get({ plain: true });

    const commentsData = await Comment.findAll({
      include: [
        {
          model: User,
          as: "comment_author",
          attributes: ["username", "id"],
        },
      ],
      where: {
        blog_id: req.params.id,
      },
    });

    const blogComments = commentsData.map((comment) =>
      comment.get({ plain: true })
    );

    res.render("singleblog", {
      singleBlogData,
      blogComments,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/admin/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "blog_author",
          attributes: ["username"],
        },
      ],
    });

    const singleBlogData = blogData.get({ plain: true });

    const commentsData = await Comment.findAll({
      include: [
        {
          model: User,
          as: "comment_author",
          attributes: ["username"],
        },
      ],
      where: {
        blog_id: req.params.id,
      },
    });

    const blogComments = commentsData.map((comment) =>
      comment.get({ plain: true })
    );
    res.render("blog-admin", {
      singleBlogData,
      blogComments,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/admin/edit/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "blog_author",
          attributes: ["username"],
        },
        {
          model: Comment,
          as: "blog_comments",
          include: {
            model: User,
            as: "comment_author",
            attributes: ["username"],
          },
        },
      ],
    });

    const editSingleBlogData = blogData.get({ plain: true });
    res.render("edit-blog", {
      editSingleBlogData,
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
