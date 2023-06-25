const myClock = document.getElementById('myClock');
let status = 'am';
function clock () {
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	
	if (hours >= 1 && hours >= 12) {
		status = 'pm';

	} else {
		status = 'am';
	}
	
	setInterval(clock, 1000);
	myClock.value = `${hours} : ${minutes} : ${seconds} ${status}`;


}


clock();

document.getElementById('btn1').addEventListener('click', function() {
	myClock.classList.add('class');

	setTimeout(function() {
		myClock.classList.remove('class')
	}, 2000);
})


