var express = require('express');
var router = express.Router();

var faceUploadService = require('./faceUploadService');
var footageUploadService = require('./footageUploadService');
var faceService = require('./faceServices');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(faceUploadService);
router.use(footageUploadService);
router.use(faceService);

module.exports = router;