const con = require('../config/connection');
//controller for deleting todo
module.exports.delete = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM Todo where id=${id}`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ message: "deleted successfully" });
    })
    
}