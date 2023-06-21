const pranish = {
	name: 'Pranish',
	age: 16,
	address: "Khokana",
	license: false,
	friends: ['samar', 'naman', 'indiwor']
}

console.log(pranish);
console.log(pranish['name']);
console.log(pranish.age);

const person = {

}

person['name'] = 'naman'
person.age = 15;

console.log(person);
console.log(person.name);
console.log(person['age']);

console.log(pranish.friends[1]);

const person2 = {
	firstName: 'Sally',
	lastName: 'Smith',
	birthYear: 2002,
	hasLicense: true,
	hobbies: ['dance', 'read', 'play piano'],
	calcAge: function () {
		console.log("This keyword:", this);
		let age;
		age = 2023 - this.birthYear;
		console.log(`${this.firstName} ${this.lastName} was born in ${this.birthYear} and is ${age} years old`);
	},

	displayHobbies: function () {
		console.log(`${this.firstName}'s hobbies are ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]}`)
	}
}

person2.calcAge();
person2.displayHobbies();

const one = {
	name: 'One'
}

const two = {
	name: {
		firstName: 'tom',
		lastName: 'tommy'
	}
}

console.log(two);
const answer = two.name.lastName;
console.log(answer);