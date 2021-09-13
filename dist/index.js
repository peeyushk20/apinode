//const fs = require('fs')
var express = require('express');
//const cors = require('cors'); 
var app = express();
var port = 3000;
var schema = require('./middleware/schemas');
var middlewar = require('./middleware/joi_validation');
//var bodyParser = require("body-parser");
/*var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '65.0.26.207',
  user: 'newuser',
  password: '()@))@&())',
  database: 'user'
})

app.use(cors());
app.use(bodyParser.json());

*/
app.get('/', function (req, res) {
    res.end('Hello World!');
});
/*app.get('/api/list_users', (req, res) => {
connection.connect()



connection.end()
});
*/
app.post('/api/login', middlewar(schema.login), function (req, res) {
    console.log('/update');
    res.json(req.body);
});
app.listen(port, function () {
    console.log("app listening at http://localhost:" + port);
});
