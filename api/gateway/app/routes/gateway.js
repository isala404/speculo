const express = require('express');
const router = express.Router();
const multer = require('multer')();
const faceService = require('../api/controllers/faceService');
const preProssesor = require('../api/controllers/preProcessor');
const adminController = require('../api/controllers/admin');
const userController = require('../api/controllers/user');

router.post('/v1/faces', adminController.validateAdmin, multer.any(), faceService.add_face);
router.put('/v1/faces/:id', adminController.validateAdmin, multer.any(), faceService.update_face);
router.get('/v1/faces', adminController.validateAdmin, faceService.get_face_by_id);
router.get('/v1/faces/:id', adminController.validateAdmin, faceService.get_face_by_id);
router.delete('/v1/faces', adminController.validateAdmin, faceService.delete_all_faces);
router.delete('/v1/faces/:id', adminController.validateAdmin, faceService.delete_face);
router.patch('/v1/faces/:id/label', adminController.validateAdmin, faceService.label_face);
router.patch('/v1/faces/:id/blacklist', adminController.validateAdmin, faceService.blacklist_face);
router.patch('/v1/faces/:id/whitelist', adminController.validateAdmin, faceService.whitelist_face);

router.post('/v1/preprocess', adminController.validateAdmin, multer.any(), preProssesor.upload_footage);

module.exports = router;