//const fs = require('fs')
const express = require('express') 
const cors = require('cors'); 
const app = express() 
const port = 3000
const schema = require('./middleware/schemas'); 
const middlewar= require('./middleware/joi_validation'); 
const bodyParser = require("body-parser");
const fs = require('fs')
var db = require('./config/config');
var authenticateController=require('./controllers/authenticate-controller');





app.use(cors()); 
app.use(bodyParser.json()); 


app.get('/', (req: any, res: any) => {
  res.end('Hello World!');
});

app.get('/api/list_users', (req, res) => {
    fs.readFile('/home/peeyushk/Desktop/apinode/users.json', 'utf8', (err, data) => {
        res.end(data);
    });
});


app.get('/api/list_users2', (req, res) => {
    db.query(
        'SELECT * FROM `login`' ,
        function(err, results, fields) {

                res.json(results);
        });
});



app.post('/api/login', middlewar(schema.login) , authenticateController.authenticate, (req: any, res: any) => { 
  console.log('/update'); 
  res.json(req.body); 
}); 

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
