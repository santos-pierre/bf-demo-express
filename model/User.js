const uuidv4 = require('uuid').v4;
const users = require('../data/index');

class User {
	#id;
	#name;
	#age;

	constructor(name, age, id = uuidv4()) {
		this.#id = id;
		this.#name = name;
		this.#age = age;
	}

	get getId() {
		return this.#id;
	}

	get getName() {
		return this.#name;
	}

	set setName(newValue) {
		this.#name = newValue;
	}

	get getAge() {
		return this.#age;
	}

	set setAge(newValue) {
		this.#age = newValue;
	}

	static all() {
		return users;
	}

	static find(id) {
		const user = users.find((user) => user.id === id);
		if (!user) {
			throw new Error(`The user ${this.getId()} does not exists.`);
		}
		return user;
	}

	static create(attributes) {
		const newUser = new User(attributes.name, attributes.age);
		users.push(newUser);
		return newUser;
	}

	update(attributes) {
		this.setAge(attributes.age);
		this.setName(attributes.name);
		return this;
	}
}

module.exports = User;
