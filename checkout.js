document.getElementById('checkout-form').addEventListener('submit', function (event) {
	event.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const book = document.getElementById('book').value;

	alert(`Thank you, ${name}! You've checked out ${book}. Confirmation has been sent to ${email}.`);

	// Here you can also send the checkout data to a server or save it in some other way.
});
document.getElementById('checkout-form').addEventListener('submit', function (event) {
	event.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const book = document.getElementById('book').value;

	alert(`Thank you, ${name}! You've checked out ${book}. Confirmation has been sent to ${email}.`);

	// Here you can also send the checkout data to a server or save it in some other way.
});
