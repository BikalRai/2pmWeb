// const age = Number(prompt("Enter age:"));
// console.log(typeof age);

// let i = 1;

// if (age >= 18) {
// 	alert("Young Adult");
// 	i++;
// }

// console.log(i);



let name = "Bisan";
if(name === 'Bisan') {
	console.log("Yippie!!");
} else {
	console.log("Who are you looking for?");
}

const hasDrivingLicense = true;
const isSober = true;
const name1 = "Molly";

if(name1 === "Sally" && hasDrivingLicense && isSober) {
	console.log("Sally will drop you off");
} else if (name1 === "Sally" && hasDrivingLicense && isSober !== true) {
	console.log("Sally might be able to drop you off");
} else if (name1 !== "Sally" && hasDrivingLicense && isSober) {
	console.log("It is not Sally!!");
} else {
	console.log("Sally is not in the condition to drop you off");
}

let age = 18;

age > 18 ? console.log("Eligible to vote") : console.log("Not eligible to vote");

// Bmi Calculator

const weight = Number(prompt("Enter weight in kg"));
const height = Number(prompt("Enter height in meters"));
const bmi = weight / height ** 2;

if (bmi < 18.9) {
	console.log("Underweight");
} else if(bmi >= 18.9 && bmi < 23.9) {
	console.log("Healthy");
} else if (bmi >= 23.9 && bmi < 29.9) {
	console.log("Unhealthy");
} else {
	console.log("Obese");
}

let num = 21;
if (num % 2 === 0) {
	console.log("Even")
} else {
	console.log("Odd")
}
