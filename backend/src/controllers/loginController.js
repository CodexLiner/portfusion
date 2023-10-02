//otp Schema for database
const otpSchema = require('../Models/otpSchema')
const functions = require('../utils/functions')
const jwt = require('jsonwebtoken')


exports.generateOtp = async (request, response) => {
    const mOtp = functions.generateOTP();
    const mMobile = request.body?.mobile
    const SendOtpToUser = await functions.otpSender(request.body.mobile, mOtp)
    if (SendOtpToUser?.status === 'success') {
        const user = { "mobile": mMobile, mOtp }
        const lastToken = jwt.sign(user, process.env.JSONEWEBTOKEN, { expiresIn: '60m' })
        if (otpSchema.findOne(mMobile)) {
            await otpSchema.deleteOne({ _id: mMobile })
        }

        const mOtpSchema = new otpSchema({
            mobile: mMobile,
            code: mOtp,
            _id: mMobile,
            lastToken: lastToken,
        })

        const databaseResponse = await mOtpSchema.save()
        // check for any error in databaseResponse

        response.send({ status: SendOtpToUser.status })
    }
    else {
        response.send({ status: "failed" })
    }
}