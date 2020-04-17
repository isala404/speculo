// imports
require('dotenv').config();
const express = require("express");
const logger = require("morgan");
const gateway = require('./app/routes/gateway');
const user = require("./app/routes/user");
const admin = require("./app/routes/admin");
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
app.use("/user", user);
app.use("/admin", admin);
app.use(gateway);


function validateUser(req, res, next) {
    jwt.verify(req.headers["x-access-token"], req.app.get("secretKey"), function (
        err,
        decoded
    ) {
        if (err) {
            res.json({status: "error", message: err.message, data: null});
        } else {
            // add user id to request
            req.body.userId = decoded.id;
            next();
        }
    });
}

function validateAdmin(req, res, next) {
    jwt.verify(req.headers["x-access-token"], req.app.get("secretKey"), function (
        err,
        decoded
    ) {
        if (err) {
            res.json({status: "error", message: err.message, data: null});
        } else {
            // add admin id to request
            req.body.adminId = decoded.id;
            next();
        }
    });
}

// handle 404 error
app.use(function (req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});
// handle errors
app.use(function (err, req, res, next) {
    console.log(err);

    if (err.status === 404) res.status(404).json({message: "Not found"});
    else res.status(500).json({message: "Something looks wrong"});
});

app.listen(3000, function () {
    console.log("Speculo Gateway --- listening on port 3000");
});
