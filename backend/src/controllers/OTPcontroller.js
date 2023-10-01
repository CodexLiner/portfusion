// Import the OTP schema and other necessary modules
const otpSchema = require('../Models/otpSchema');
const functions = require('../utils/functions');

exports.sendOtp = async (req, res) => {

  // Extract the mobile number from the request body

  const { mobile } = req.body;

  // Generate an OTP    

  const otpCode = functions.generateOTP(); // Implement your OTP generation logic

  try {
    // Save the OTP code in the database
    const otpData = new otpSchema({
      mobile: mobile,
      code: otpCode,
      _id : idText,
      lastToken:tokenToString,

    });

    await otpData.save();
    // Replace  with code to send SMS
   

    // Respond to the client
    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "Internal server error" });
  }
};
