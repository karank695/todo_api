const con = require('../config/connection');
//controller to update todo
module.exports.update = (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE Todo SET completed=${req.body.completed} WHERE id=${id}`;
    con.query(sql, (err, result) => {
        if (err) throw err;
    })
    const sql1 = `SELECT * FROM Todo WHERE id=${id}`;
    con.query(sql1, (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            return res.json({ message: "data not found" });
        }
        return res.json({ message: "updated successfully", data: result });
    })
    
}