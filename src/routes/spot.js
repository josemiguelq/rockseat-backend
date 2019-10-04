const express = require('express')
const multer = require('multer')
const SpotController = require('./../controllers/SpotController')
const BookingController = require('./../controllers/BookingController')
const UploadConfig = require('./../config/upload')
const upload = multer(UploadConfig)

const routes = express.Router()

routes.post('/spot', upload.single('thumbnail'), SpotController.store);
routes.get('/spot', SpotController.index);
routes.post('/spot/spot_id/booking', BookingController.store);

module.exports = routes;
