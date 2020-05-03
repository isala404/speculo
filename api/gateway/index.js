// imports
require('dotenv').config(); // loads environment variables from a .env file into process.env
const express = require("express");
const logger = require("morgan");
const gateway = require('./app/routes/gateway');
const user = require("./app/routes/user");
const bodyParser = require("body-parser");
const mongoose = require("./config/database"); //database configuration
var cors = require('cors')

const app = express(); // express
app.set("secretKey", "nodeRestApi"); // jwt secret token

// connection to mongodb
mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);

app.use(logger("dev"));  // HTTP request logger middleware
app.use(bodyParser.json()); // accept JSON requests
app.use(cors()) // enable cors

app.get("/", function (req, res) {
    res.send("Welcome to Speculo Gateway");
});

// public route
app.use("/api/v1", user);
app.use("/api", gateway);

// handle 404 error
app.use(function (req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// handle errors
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404) res.status(404).json({status: err});
    else res.status(500).json({status: err});
});

app.listen(3000, function () {
    console.log("Speculo Gateway --- listening on port 3000");
});
