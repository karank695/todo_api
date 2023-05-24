const mysql = require('mysql');
//making connection with mysql server
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_data'
});
con.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("connected successfully");
})
module.exports = con;
