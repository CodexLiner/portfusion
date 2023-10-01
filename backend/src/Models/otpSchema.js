const mongoose = require("mongoose");

const Otps = mongoose.Schema({
    mobile: { type: String, required: true },
    code: { type: String, required: true },
    _id: { type: String, required: true },
    lastToken: { type: String, required: true },
});
module.exports = mongoose.model("otpSchema", Otps);