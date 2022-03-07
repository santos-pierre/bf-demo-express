const express = require('express');
const { users } = require('../data/index.json');
const uuidv4 = require('uuid').v4;

const userRouter = express.Router();

userRouter
	.route('/users')
	.get((_req, res) => {
		return res.status(200).json(users);
	})
	.post(({ body }, res) => {
		const { name, age } = body;
		const newUser = {
			id: uuidv4(),
			name,
			age,
		};
		users.push(newUser);
		return res.status(201).json(newUser);
	});

userRouter.get('/users/:id', ({ params }, res) => {
	const { id } = params;
	const user = users.find((user) => user.id === id);
	if (!user) {
		return res.status(404).json({ message: 'Not Found', status: 404 });
	}
	return res.status(201).json(user);
});

userRouter.patch('/users/:id', ({ body, params }, res) => {
	const { name, age } = body;
	const { id } = params;
	const indexOfUser = users.findIndex((user) => user.id === id);
	if (indexOfUser === -1) {
		return res.status(404).json({ status: 404, message: `The user ${id} does not exist.` });
	}
	const updatedUser = { id, name, age };
	users[indexOfUser] = updatedUser;
	return res.status(204).json(updatedUser);
});

module.exports = userRouter;
