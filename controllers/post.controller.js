const mysql = require('mysql');
const con = require('../config/connection');
//controller to create todo in database
module.exports.createTodo = (req, res) => {
    console.log(req.body);
        const sql = `INSERT INTO todo (todo,completed,user_email)
        VALUES("${req.body.todo}",${req.body.completed},"${req.body.user_email}")
        `
        con.query(sql, (err, result) => {
            if (err) throw err
            console.log('1 record inserted');
            return res.json({ message: "record inserted successfully" });
        })
    // })
}