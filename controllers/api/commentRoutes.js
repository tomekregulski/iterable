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

// Update a comment by id
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      {
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Deletes comment by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
