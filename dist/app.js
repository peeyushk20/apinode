//const fs = require('fs')
var express = require('express');
var cors = require('cors');
var app = express();
var port = 3000;
var schema = require('./middleware/schemas');
var middlewar = require('./middleware/joi_validation');
var bodyParser = require("body-parser");
var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: '13.233.108.165',
    user: 'newuser',
    password: 'ds()@))@&())',
    database: 'user'
});
app.use(cors());
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.end('Hello World!');
});
app.get('/api/list_users2', function (req, res) {
    connection.query('SELECT * FROM `login`', function (err, results, fields) {
        res.json(results);
    });
});
app.post('/api/login', middlewar(schema.login), function (req, res) {
    console.log('/update');
    res.json(req.body);
});
app.listen(port, function () {
    console.log("app listening at http://localhost:" + port);
});
