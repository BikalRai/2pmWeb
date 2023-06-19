// function declaration

function hello() {
	console.log("Hello");
}

hello();


// function expression
const hello1 = function () {
	console.log("Hello from hello1");
}

hello1();

// arrow function
const hello2 = () => {
	console.log("Hello from hello2");
}
hello2();

// function with parameters
function greet(param1, param2, param3) {
	console.log(param1, param2, param3)
}

greet("Hello", 'Ajit', 2);
hello1();
greet(1,2,3)

// function with return statement
function greet2() {
	return 'Greetings!!👌👌👌';
}

console.log(greet2());
const greetings = greet2();
console.log(greetings);

const returnType = function (x, y) {
	let z = x + y

	return z;

}

console.log(returnType(1,2))
console.log(returnType(10,22))
