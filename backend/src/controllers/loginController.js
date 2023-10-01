//otp Schema for database
const otpSchema = require('../Models/otpSchema')
// static class for functions
const functions = require('../utils/functions')
exports.generateOtp = async (request, response) => {
    const mOtp = functions.generateOTP();
    response.send("otp genrated " + mOtp)
}