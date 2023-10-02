//otp Schema for database
const otpSchema = require('../Models/otpSchema')
const functions = require('../utils/functions')

exports.generateOtp = async (request, response) => {
    const mOtp = functions.generateOTP();
    // const SendOtpToUser = await functions.otpSender(request.body.mobile, mOtp)
    if (SendOtpToUser?.status === 'success') {
        response.send({ status: SendOtpToUser.status })
    }
    else {
        response.send({ status: "failed" })
    }
}