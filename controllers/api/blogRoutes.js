const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

router.get("/:id", async (req, res) => {
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

    res.status(200).json(singleBlogData, blogComments);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      user_id: req.session.user_id,
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
