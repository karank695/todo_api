const con = require('../config/connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();
//controller to show end point
module.exports.getEndPoint = (req, res) => {
    return res.send("hello, this is end point! now you can use api's ");
}
//controller to get todo list
module.exports.getTodo = (req, res) => {
    let data;
    const sql = `select * from todo`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        data = result;
        return res.status(200).json({ data: data })
    })
}
//controller to get todo by id
module.exports.getOne = (req, res) => {
    const id = req.params.id;
    let data;
    const sql = `select * from todo`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        data = result;
        data = data.filter((data) => data.id == id)
        if (data.length == 0) {
            return res.json({ message: "data not found" });
        }
        return res.status(200).json({ data: data })
    })
}
//controller to register for deleting or updating or posting todo
module.exports.register = (req, res) => {
    let user;
    const findUserByEmail = `SELECT * FROM api_user WHERE email="${req.body.email}"`
    con.query(findUserByEmail, (err, result) => {
        data = result;
        if (err) throw err;
        if (result.length == 1) {
            user = {
                email: result[0].email,
                password: result[0].password
            }
            return res.status(200).json({
                message:  `registered successfully and here is your token,please keep it safe
                it is valid for 2 minutes`,
                data: {
                    token: jwt.sign(user, process.env.secret_key, { expiresIn: '100000' })
                }
            })
        }
        const sql = `INSERT INTO api_user(email,password)
        VALUES("${req.body.email}","${req.body.password}")`;
        con.query(sql, function (err, result) {
        if (err) throw err;
        data = result;
    })
    const sql2 = `SELECT * FROM api_user WHERE email="${req.body.email}"`;
    con.query(sql2, (err, result) => {
        if (err) throw err;
        let user = {
            email: result[0].email,
            password: result[0].password
        }
        return res.status(200).json({
            message: `registered successfully and here is your token,please keep it safe
             it is valid for 2 minutes`,
            data: {
                token: jwt.sign(user, process.env.secret_key, { expiresIn: '120000' })
            }
        })
    })
    })


}