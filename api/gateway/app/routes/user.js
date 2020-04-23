const express = require("express");
const router = express.Router();
const userController = require("../api/controllers/user");

router.post("/user/register", userController.createUser);
router.post("/user/authenticate", userController.authenticateUser);

router.post("/admin/register", userController.createAdmin);
router.post("/admin/authenticate", userController.authenticateAdmin);

module.exports = router;
