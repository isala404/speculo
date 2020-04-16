var express = require('express');
var router = express.Router();

var faceUploadService = require('./faceUploadService');
var footageUploadService = require('./footageUploadService');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(faceUploadService);
router.use(footageUploadService);

module.exports = router;