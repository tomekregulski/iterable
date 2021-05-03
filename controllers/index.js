const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const blogRoutes = require("./blogRoutes");
const dashboardRoutes = require("./dashboardRoutes");
const loginRoutes = require("./loginRoutes");

router.use("/", homeRoutes);
router.use("/blogs", blogRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/login", loginRoutes);

module.exports = router;
