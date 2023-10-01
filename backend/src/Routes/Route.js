const express = require('express');
const router = express.Router();

//login controller 
const login = require('../controllers/loginController')


router.post("/loginSendOtp", login.generateOtp)

module.exports = router;