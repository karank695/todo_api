const passport = require('passport');
const con = require('../config/connection');
require('dotenv').config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secret_Key,
}
//implementing jwt strategy
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {

//finding user by payload email
    const sql = `SELECT * FROM api_user WHERE email="${jwt_payload.email}" `;
    con.query(sql, (err, result) => {
        if (err) {
            console.log("err in jwt strategy", err);
            return done(null,false);
        }
        if (result.length == 1) {
            let user = {
                email: result[0].email,
                password: result[0].password
            }
            return done(null, user);
        }
        return done(null, false);
    })
   
}))