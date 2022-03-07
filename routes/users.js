const express = require('express');
const userController = require('../controllers/UserController');

const userRouter = express.Router();

userRouter.route('/').get(userController.index).post(userController.store);

userRouter.get('/:id', userController.show);

userRouter.patch('/:id', userController.update);

module.exports = userRouter;
