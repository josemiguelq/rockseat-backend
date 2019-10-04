const express = require('express')
const multer = require('multer')
const SpotController = require('./../controllers/SpotController')
const UploadConfig = require('./../config/upload')
const upload = multer(UploadConfig)

const routes = express.Router()

routes.post('/spot', upload.single('thumbnail'),SpotController.store);

module.exports = routes;
