//const fs = require('fs')
var express = require('express');
var cors = require('cors');
var app = express();
var port = 3000;
var schema = require('./middleware/schemas');
var middlewar = require('./middleware/joi_validation');
var bodyParser = require("body-parser");
var fs = require('fs');
var db = require('./config/config');
var authenticateController = require('./controllers/authenticate-controller');
app.use(cors());
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.end('Hello World!');
});
app.get('/api/list_users', function (req, res) {
    fs.readFile('/home/peeyushk/Desktop/apinode/users.json', 'utf8', function (err, data) {
        res.end(data);
    });
});
app.get('/api/list_users2', function (req, res) {
    db.query('SELECT * FROM `login`', function (err, results, fields) {
        res.json(results);
    });
});
app.post('/api/login', middlewar(schema.login), authenticateController.authenticate, function (req, res) {
    console.log('/update');
    res.json(req.body);
});
app.listen(port, function () {
    console.log("app listening at http://localhost:" + port);
});
