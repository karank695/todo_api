const express = require('express');
const router = express.Router();
const passport = require('passport');
const getController = require('../controllers/get.controller');
const postController = require('../controllers/post.controller');
const putController = require('../controllers/put.controller');
const deleteController = require('../controllers/delete.controller');
router.get('/', getController.getEndPoint);
router.post('/register', getController.register);
router.get('/todo', getController.getTodo);
router.get('/todo/:id', getController.getOne);
router.post('/todo/create', passport.authenticate('jwt', {
    session:false
}),postController.createTodo);
router.put('/todo/:id', passport.authenticate('jwt', {
    session:false
}),putController.update);
router.delete('/todo/:id',passport.authenticate('jwt', {
    session:false
}),deleteController.delete);
module.exports = router;