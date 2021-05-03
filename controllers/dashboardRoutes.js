const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Blog, Comment } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    // const dbUserData = await User.findByPk(req.session.user_id);

    // const user = dbUserData.get({ plain: true });

    // const dbProjectData = await Project.findAll({
    //   order: [["name", "ASC"]],
    // });

    // const projects = dbProjectData.map((project) =>
    //   project.get({ plain: true })
    // );

    res.render("dashboard");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
