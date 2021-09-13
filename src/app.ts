//const fs = require('fs')
const express = require('express') 
const cors = require('cors'); 
const app = express() 
const port = 3000
const schema = require('./middleware/schemas'); 
const middlewar= require('./middleware/joi_validation'); 
const bodyParser = require("body-parser");

const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: '13.233.108.165',
  user: 'newuser',
  password: '()@))@&())',
  database: 'user'
})

app.use(cors()); 
app.use(bodyParser.json()); 


app.get('/', (req: any, res: any) => {
  res.end('Hello World!');
});


app.get('/api/list_users2', (req, res) => {
    connection.query(
        'SELECT * FROM `login`' ,
        function(err, results, fields) {

                res.json(results);
        });
});


app.post('/api/login', middlewar(schema.login) , (req: any, res: any) => { 
  console.log('/update'); 
  res.json(req.body); 
}); 

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
