const adminModel = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    create: function (req, res, next) {
        // queries the db to check if the email is already in use
        adminModel.findOne({email: req.body.email}, function (err, admin) {
            if (err) next(err);

            if (admin != null) {
                res.status(409).json({
                    status: "failed",
                    message: "Admin already exists!"
                });

                return;
            }

            // if there isn't an existing account, then it creates a new entry in the database
            adminModel.create(
                {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                },
                function (err, result) {
                    if (err) next(err);
                    else
                        res.json({
                            status: "success",
                            message: "Admin added successfully!",
                            data: {
                                name: req.body.name,
                                email: req.body.email,
                                password: req.body.password
                            }
                        });
                }
            );
        });


    },
    authenticate: function (req, res, next) {
        // finds a record with the same email address provided
        adminModel.findOne({email: req.body.email}, function (err, adminInfo) {
            if (err) {
                next(err);
            }else if(!adminInfo){

                res.status(401).json({
                    status: "error",
                    message: "Invalid email/password!",
                    data: null
                });
                
            } else {
                // checks if the hash value in the db and the hashed value of the password in the request body match
                if (bcrypt.compareSync(req.body.password, adminInfo.password)) {
                    console.log(adminInfo.password)
                    const token = jwt.sign(
                        {id: adminInfo._id},
                        req.app.get("secretKey"),
                        {expiresIn: "1h"}
                    );
                    res.json({
                        status: "success",
                        message: "Admin found!",
                        data: {admin: adminInfo, token: token}
                    });
                } else {
                    res.status(401).json({
                        status: "error",
                        message: "Invalid email/password!",
                        data: null
                    });
                }
            }
        });
    },

    validateAdmin:function(req, res, next){
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
};
