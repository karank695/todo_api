const express = require('express');
const app = express();
const conn = require('./config/connection');
const jwtStrategy = require('./config/passport_jwt_strategy');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();
const session = require('express-session');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
app.use('', require('./routes/index'));
app.listen(8000, () => {
    console.log(`i am listening at port ${process.env.port}`);
});
