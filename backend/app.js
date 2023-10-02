require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const port = process.env.PORT || 3002;
app.use(bodyParser.json());


const routes = require('./src/Routes/Route');
app.use('/', routes);

//db conection 
mongoose.connect(process.env.DB, () => {
    console.log("Database Connected!");
});
// server start
app.listen(port, () => console.log(`App listening on port ${port}!`));