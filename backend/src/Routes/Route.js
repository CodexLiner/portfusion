const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

//login controller 
const login = require('../controllers/loginController')


router.post("/loginSendOtp", login.generateOtp)
router.post("/sendOtp", otpController.sendOtp);


module.exports = router;