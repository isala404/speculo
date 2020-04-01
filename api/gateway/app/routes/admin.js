const express = require("express");
const router = express.Router();
const adminController = require("../api/controllers/admin");

router.post("/register", adminController.create);
router.post("/authenticate", adminController.authenticate);

module.exports = router;
