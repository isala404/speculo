const express = require("express");
const router = express.Router();
const multer = require("multer")(); // for handling multipart/form-data
const faceController = require("../api/controllers/face");
const imageProcessorController = require("../api/controllers/imageProcessor");
const downscaler = require("../api/controllers/downscaler");
const userController = require("../api/controllers/user");

// face service
router.post(
  "/v1/faces",
  userController.validateUser,
  multer.any(),
  faceController.add_face
);
router.post(
  "/v1/faces/unknown",
  userController.validateUser,
  multer.any(),
  faceController.unknown_face
);
router.put(
  "/v1/faces/:id",
  userController.validateUser,
  multer.any(),
  faceController.update_face
);
router.put(
  "/v1/faces/:id/append",
  userController.validateUser,
  multer.any(),
  faceController.append_face
);
router.get(
  "/v1/faces",
  userController.validateUser,
  faceController.get_all_faces
);
router.get(
  "/v1/faces/:id",
  userController.validateUser,
  faceController.get_face_by_id
);
router.delete(
  "/v1/faces",
  userController.validateUser,
  faceController.delete_all_faces
);
router.delete(
  "/v1/faces/:id",
  userController.validateUser,
  faceController.delete_face
);
router.patch(
  "/v1/faces/:id/label",
  userController.validateUser,
  faceController.label_face
);
router.patch(
  "/v1/faces/:id/blacklist",
  userController.validateUser,
  faceController.blacklist_face
);
router.patch(
  "/v1/faces/:id/whitelist",
  userController.validateUser,
  faceController.whitelist_face
);

// pre processor
router.post(
  "/v1/preprocess",
  userController.validateUser,
  multer.any(),
  imageProcessorController.upload_footage
);

// downscaler
router.post(
  "/v1/downscale",
  userController.validateUser,
  multer.any(),
  downscaler.downscale
);



module.exports = router;
