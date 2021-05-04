const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Blog } = require("../../models");

// router.post("/", withAuth, async (req, res) => {
//   try {
//     const newBlog = await Blog.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newBlog);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [
        {
          model: User,
          as: "post_author",
          attributes: ["username"],
        },
        {
          model: Comment,
          as: "post_comments",
          include: {
            model: User,
            as: "comment_author",
            attributes: ["username"],
          },
        },
      ],
    });
    const postsData = allPosts.map((post) => post.get({ plain: true }));
    res.status(200).json(postsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      user_id: req.body.user_id,
      blog_content: req.body.blog_content,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.update(
      {
        blog_content: req.body.blog_content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
