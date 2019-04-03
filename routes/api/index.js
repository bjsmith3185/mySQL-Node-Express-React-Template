const router = require("express").Router();
const modelRoutes = require("./modelRouter");

//  routes
router.use("/model", modelRoutes);

module.exports = router;
