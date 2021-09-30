const express = require('express');
const router = express.Router();
const uploadImage = require('../controllers/uploadImage.controller');
const uploadMulter = require('../controllers/uploadFileWithMulter')

router.post('/upload', uploadMulter.uploadFile, uploadImage.insertFile)
router.get('/', uploadImage.getListFile)
router.post('/update', uploadImage.updateImage)
module.exports = router;