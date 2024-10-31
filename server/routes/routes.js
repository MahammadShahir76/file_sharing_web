const express = require('express');
const { uploadImage, downloadImage } = require('../Controller/image-controller.js');
const upload = require('../ubils/upload'); // Adjust the path accordingly
const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', downloadImage);

module.exports = router;
