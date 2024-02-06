// Function to validate email
const validEmail = (emailValue) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(emailValue);
};

// Function for error message
let showError = (input, message) => {
	input.style.border = "1px solid hsl(354, 100%, 66%)";
	let errorText = document.getElementById("errorText");
	errorText.innerText = message;
	errorText.style.color = "hsl(354, 100%, 66%)";
};

// Function to reset error
let resetError = (input, message) => {
	input.style.border = "1px solid green";
	let errorText = document.getElementById("errorText");
	errorText.innerText = message;
	errorText.style.color = "green";
};

// Function to validate the form
const validateForm = (event) => {
	event.preventDefault();

	let emailInput = document.getElementById("email");
	let emailValue = emailInput.value.trim();

	if (emailValue === "") {
		showError(emailInput, "Whoops! It looks like you forgot to add your email");
		return false;
	} else if (!validEmail(emailValue)) {
		showError(emailInput, "Please provide a valid email address");
		return false;
	} else {
		resetError(emailInput, "Your email is valid");
		return true;
	}
};

document.getElementById("form").addEventListener("submit", validateForm);
