// $(document).ready(function() {
// 	$('#btn1').click(function () {
// 		$('h1').hide();
// 	})


// 	$('#btn2').click(function () {
// 		$('h1').show();
// 	})

// 	$('#btn3').click(function () {
// 		$('h1').toggle();
// 	})
// })

// $('#btn1').click(function () {
// 	$('h1').hide(1000);
// })


// $('#btn2').click(function () {
// 	$('h1').show(2000);
// })

// $('#btn3').click(function () {
// 	$('h1').toggle(3000);
// })


// $('#btn1').click(function () {
// 	$('h1').slideUp(1000);
// })


// $('#btn2').click(function () {
// 	$('h1').slideDown(2000);
// })

// $('#btn3').click(function () {
// 	$('h1').slideToggle(3000);
// })

// $('#btn4').click(function () {
// 	$('h1').stop();
// })


// $('#btn1').click(function () {
// 	$('h1').fadeOut(1000);
// })


// $('#btn2').click(function () {
// 	$('h1').fadeIn(2000);
// })

// $('#btn3').click(function () {
// 	$('h1').fadeToggle(3000);
// })

// $('#btn4').click(function () {
// 	$('h1').stop();
// })


$('#btn1').click(function () {
	$('h1').slideUp(1000).slideDown(2000).fadeOut(1000).fadeIn(5000);
})


$('#btn2').click(function () {
	$('h1').css('font-size', '5rem');
})

$('#btn3').click(function () {
	$('h1').css({
		color: 'cyan',
		backgroundColor: 'darkgreen',
		transform: 'rotateY(80deg)'
	});
})

$('#btn4').click(function () {
	$('h1').stop();
})


$("#click").click(function() {
	let box = $('.box');

	box.animate({
		left: '100px',
		top: "0"
	}, 1000)

	box.animate({
		left: "100px",
		top: '100px'
	}, 1000)

	box.animate({
		left: '0',
		top: "100px"
	}, 1000)

	box.animate({
		left: "0",
		top: '0',
	}, 1000)
},)



$('#btn2').click(function () {
	console.log($('h1').text());
})

$('#btn4').click(function () {
	$('h1').text('Welcome');
})

