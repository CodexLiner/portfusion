require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const port = process.env.PORT || 3001;
app.use(bodyParser.json());


const routes = require('./src/Routes/Route');
const otpRoutes = require('./src/Routes/otpRoute');
app.use('/', routes);
app.use('/otp', otpRoutes);

//db conection 
// mongoose.connect(process.env.DB, () => {
//   console.log("db connected!");
// });
// server start
app.listen(port, () => console.log(`App listening on port ${port}!`));