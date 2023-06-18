// for loop

for (let i = 1; i <= 10; i++) {
	console.log(i);
}

for (let i = 1; i <= 10; i++) {
	console.log("Hello World");
}

// while loop

let i = 0;

while(i < 10) {
	console.log(i + 1);
	i++;
}

// do while loop
let j = 10;

do {
	console.log(j);
	j--;
} while (j > 5);

let k = 5;

do {
	console.log(k);
	j--;
} while (k > 5);

// for loop example

for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		console.log("even")
	} else {
		console.log(i);
	}
}


// while loop example
let num = Number(prompt("Enter number"));
let reverse = 0;
let original_num = num;

while (num !== 0) {
	let remainder = num % 10;
	reverse = reverse * 10 + remainder;
	num = Math.floor(num / 10)
}

if (original_num === reverse) {
		console.log("Palindrome number");
	} else {
		console.log("Not Palindrome number");
	}

// for loop example 2
let sum = 0;
for (let i = 1; i <= 10; i++) {
	sum += i;
}

console.log(sum);