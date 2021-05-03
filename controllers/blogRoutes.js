const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    const blog = blogData.get({ plain: true });

    res.render("blog", { blog });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
