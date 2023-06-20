const arr = [1, 2, 3.5, true, [5,6], 'Hello there'];
console.log(arr);

console.log(arr[2]);
console.log(arr[4]);
console.log(arr[4][1]);

const arr2 = [1, [2, [3, 4]]];
console.log(arr2[1]);
console.log(arr2[1][1]);
console.log(arr2[1][1][0]);

const fruits = ['apple', 'orange', 'banana'];
console.log("fruits:", fruits);
fruits.push('pear');
console.log("fruits:", fruits);
fruits.push(1);
console.log("fruits:", fruits);
fruits.pop();
console.log("fruits:", fruits);
const pear = fruits.pop();
console.log(pear);

console.log(fruits.join(""));

fruits.shift();
console.log("fruits:", fruits);
fruits.unshift("water melon");
console.log("fruits:", fruits);

const result1 = fruits.includes("apple");
console.log(result1);
const result2 = fruits.includes("orange");
console.log(result2);

console.log(fruits.indexOf('water melon'));


const numbers = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9, 10];

console.log(numbers.length);
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

numbers.forEach(function(element, index) {
	console.log(element, index);
});

numbers.forEach(function(element) {
	console.log(element);
});

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] === 5){
		continue;
	} else {
		console.log(numbers[i]);
	}
}

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] === 5){
		break;
	} else {
		console.log(numbers[i]);
	}
}


numbers.forEach( function(num) {
	console.log(num);
});