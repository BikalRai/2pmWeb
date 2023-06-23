// Math library

// let a = 5.2;

// console.log(Math.ceil(a));
// console.log(Math.round(a));
// console.log(Math.pow(2, 6));
// console.log(Math.floor(12.9));

// function dice () {
// 	let randomNum = Math.floor(Math.random() * 6) + 1;

// 	return randomNum;
// }

// for(let i = 1; i <= 10; i++) {
// 	console.log('Rolling dice...',dice());
// }

let count = document.getElementById('count');
const btnIncrement = document.querySelector('#btn1');
const btnDecrement= document.getElementById('btn2');
const btnSave = document.querySelector('#btn3');
const btnReset = document.querySelector('#btn4');
let prevCount = document.getElementById('prev-count');
let counter = 0;

// console.log(count, btnIncrement, btnDecrement, btnSave, btnReset);
console.log(count);

function increment () {
	counter++;
	count.textContent = `Count: ${counter}`;
}

btnIncrement.addEventListener('click', increment);

// btnIncrement.addEventListener('click', function() {
// 	counter++;
// 	count.textContent = `Count: ${counter}`;

// })

btnDecrement.addEventListener('click', function() {
	if (counter < 1) {
		count.textContent = `Count: ${counter}`;
	} else {
		counter--;
		count.textContent = `Count: ${counter}`;
	}
	

})

btnSave.addEventListener('click', function () {
	prevCount.textContent += `- ${counter} `
	counter = 0;
	count.textContent = `Count: 0`;
})

btnReset.addEventListener('click', function() {
	prevCount.textContent = `Previous count: `
	counter = 0;
	count.textContent = `Count: 0`;
})