//otp Schema for database
const { text } = require('body-parser');
const otpSchema = require('../Models/otpSchema')
// static class for functions
const functions = require('../utils/functions')
exports.generateOtp = async (request, response) => {
    const mOtp = functions.generateOTP();
    response.send("otp genrated " + mOtp)
}

exports.sendOTP = async (request, response) => {
    const { mobile } = request.body;
    const otpCode = functions.generateOTP(); 

    try {
        const existingOtpData = await otpSchema.findOne({ mobile });

        if (existingOtpData) {
            console.log('Daily User');
        } else {
           
            console.log('New User');

            const newOtpData = new otpSchema({
                mobile: mobile,
                code: otpCode,
                _id : idText,
                lastToken:tokenToString,
            });

            await newOtpData.save();
        }

       // code for process send SMS

        // Respond to the client
        response.json({ message: "OTP sent successfully" });
    } catch (error) {
        // Handle errors, e.g., database errors or SMS sending failures
        response.status(500).json({ error: "Internal server error" });
    }
};