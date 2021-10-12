var jwt = require('jsonwebtoken');
var db = require('./../config/config');
process.env.SECRET_KEY = "thisismysecretkey";
module.exports.authenticate = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    db.query('SELECT * FROM login WHERE email = ?', [email], function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            });
        }
        else {
            if (results.length > 0) {
                if (password == results[0].password) {
                    var token = jwt.sign(JSON.stringify(results[0]), process.env.SECRET_KEY);
                    res.json({
                        status: true,
                        token: token
                    });
                }
                else {
                    res.json({
                        status: false,
                        message: "Email and password does not match"
                    });
                }
            }
            else {
                res.json({
                    status: false,
                    message: "Email does not exits"
                });
            }
        }
    });
};
