// const { Comment, User, Blog } = require("../../models");
// const router = require("express").Router();

const { Comment } = require("../../models");
const router = require("express").Router();

// WORKING
router.get("/", async (req, res) => {
  try {
    const allComments = await Comment.findAll();
    const commentData = allComments.map((user) => user.get({ plain: true }));
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// WORKING
router.post("/:userid/:blogid", async (req, res) => {
  try {
    const newComment = await Comment.create({
      user_id: req.params.userid,
      blog_id: req.params.blogid,
      comment_content: req.body.comment_content,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// WORKING
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.update(
      {
        comment_content: req.body.comment_content,
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

// WORKING
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

module.exports = router;
