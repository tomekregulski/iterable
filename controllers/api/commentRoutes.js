const { Comment } = require("../../models");
const router = require("express").Router();

router.post("/:user_id/:blog_id", async (req, res) => {
  try {
    const newComment = await Comment.create({
      user_id: req.params.user_id,
      blog_id: req.params.blog_id,
      content: req.body.content,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});
