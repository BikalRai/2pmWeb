const form = document.forms['myForm'];
const formFirstName = document.forms['myForm'].firstName;
const formLastName = document.forms['myForm'].lastName;
const formPassword = document.forms['myForm'].password;

const btn = document.querySelector('button');

function validate (event) {
	event.preventDefault()
	if (formFirstName.value === '' || formFirstName.value === null) {
		alert("Do not leave field empty");
		formFirstName.focus();
	} else if (formLastName.value === '' || formLastName.value === null) {
		alert("Do not leave field empty");
		formLastName.focus();
	} else if (formPassword.value === '' || formPassword.value === null) {
		alert("Do not leave field empty");
		formPassword.focus();
	}


	if(formFirstName.value === 'bikal'){
		if(formLastName.value === 'rai') {
			if (Number(formPassword.value) === 1234) {
				alert(`Welcome ${formFirstName.value} ${formLastName.value}`);
			} else {
				alert('Password do not match');
			}
		}else {
			alert('Invalid lastname');
		}
	} else {
		alert('Invalid firstname')
	}


	formFirstName.value = ''
	formLastName.value = ''
	formPassword.value = ''

}

btn.addEventListener('click', validate);