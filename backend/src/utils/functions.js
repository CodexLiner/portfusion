const { HEADER, OTP_TEMPLATE, API_URL } = require('../utils/Constants')
const axios = require('axios')
class functions {
    // function for generating random otp
    static generateOTP() {
        const digits = "0123456789";
        let OTP = "";
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
    }
    // function for sending otp via api
    static async otpSender(mobile, otp) {
        try {
            const message = encodeURIComponent(`${otp} ${OTP_TEMPLATE}`);
            const apiUrl = `${API_URL}apikey=${process.env.TEXTTOLOCALKEY}&numbers=91${mobile}&message=${message}&sender=${HEADER}`;
            const response = await axios.get(apiUrl);
            //if otp already exist in database 
            return response.data
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    }
}

module.exports = functions