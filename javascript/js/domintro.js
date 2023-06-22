const headings = document.getElementsByTagName('h1');
console.log(headings);
console.log(headings[2]);

const paragraphs = document.getElementsByClassName('para');
console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
	console.log(paragraphs[i]);
}

const h2 = document.getElementsByTagName('h2');
console.log(h2);
console.log(h2[0]);

const h1Id = document.getElementById('header');
console.log(h1Id);

const queried = document.querySelector('#header');
console.log(queried);

const all = document.querySelectorAll('.para');
console.log(all);

// getting text
console.log(h1Id.innerHTML)
console.log(h1Id.innerText)
console.log(h1Id.textContent)

// setting text

h1Id.innerHTML = '<em>changed it</em>'
// h1Id.innerText = 'changed it again'
// h1Id.textContent = 'changed it again and again'

document.body.style.backgroundColor = "red";

const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', function() {
	document.body.style.backgroundColor = 'rgba(111, 220, 15, 0.8)';
})


function toHide() {
	h1Id.style.display = "none";
}

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', toHide)

document.getElementById('btn3').addEventListener('click', function() {
	document.querySelector('#header').classList.add('addStyle');
})

document.getElementById('btn4').addEventListener('click', function() {
	document.querySelector('#header').classList.remove('addStyle');
})

document.getElementById('btn5').addEventListener('click', function() {
	document.querySelector('#header').classList.toggle('addStyle');
})