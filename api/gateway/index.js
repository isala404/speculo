// imports
require('dotenv').config();
const express = require("express");
const logger = require("morgan");
const gateway = require('./app/routes/gateway');
const user = require("./app/routes/user");
const bodyParser = require("body-parser");
const mongoose = require("./config/database"); //database configuration
var jwt = require("jsonwebtoken");

const app = express(); // express
app.set("secretKey", "nodeRestApi"); // jwt secret token

// connection to mongodb
mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);

app.use(logger("dev"));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

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

    if (err.status === 404) res.status(404).json({status: "Not found"});
    else res.status(500).json({status: "Something looks wrong"});
});

app.listen(3000, function () {
    console.log("Speculo Gateway --- listening on port 3000");
});
