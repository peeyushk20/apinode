const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: '13.233.148.97',
  user: 'newuser',
  password: '()@))@&())',
  database: 'user'
})

connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;
