const User = require('./../model/User');

/**
 *
 * @param {import('express').Request<{}, any, any, qs.ParsedQs, Record<string, any>>} req
 * @param {import('express').Response<any, Record<string, any>, number>} res
 * @returns
 */
const index = (_req, res) => {
	return res.json(User.all());
};

/**
 *
 * @param {import('express').Request<{}, any, any, qs.ParsedQs, Record<string, any>>} req
 * @param {import('express').Response<any, Record<string, any>, number>} res
 * @returns
 */
const store = (req, res) => {
	const newUser = User.create({ ...req.body });
	return res.status(201).json(newUser);
};

/**
 *
 * @param {import('express').Request<{}, any, any, qs.ParsedQs, Record<string, any>>} req
 * @param {import('express').Response<any, Record<string, any>, number>} res
 * @returns
 */
const show = (req, res) => {
	const { id } = req.params;
	try {
		const user = User.find(id);
		return res.status(201).json(user);
	} catch (error) {
		return res.status(404).json({ message: error.message });
	}
};

const update = (req, res) => {
	const { id } = req.params;
	try {
		const user = User.find(id);
		user.update({ ...req.body });
		return res.status(204).json(user);
	} catch (error) {
		return res.status(404).json({ message: error.message });
	}
};

const userController = { index, show, store, update };

module.exports = userController;
