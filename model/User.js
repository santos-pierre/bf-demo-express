const uuidv4 = require('uuid').v4;
const { users } = require('./../data/index.json');

class User {
	#id;
	#name;
	#age;

	constructor(name, age) {
		this.#id = uuidv4();
		this.#name = name;
		this.#age = age;
	}

	get getId() {
		return this.#id;
	}

	get getName() {
		return this.#name;
	}

	get getAge() {
		return this.#age;
	}

	static create(attributes) {
		const newUser = { ...attributes, id: uuidv4() };
		users.push(newUser);
		return newUser;
	}

	update(attributes) {}
}

module.exports = User;
