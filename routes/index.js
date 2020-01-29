const express = require("express");
// const admin = require("./admin");
// const dashboard = require("./dashboard");
const performance = require("./performance");
const router = express.Router();

// router.use("/admin", admin);
// router.use("/dashboard", dashboard);

router.use("/performance", performance);

module.exports = router;
