// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let isValid = true; // Flag to track overall validity

    // Validate Full Name
    if (fullName.length < 5) {
        showError('nameError', 'Full Name must be at least 5 characters long.');
        isValid = false;
    }

    // Validate Email
    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email address.');
        isValid = false;
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/; // Regex for 10-digit number
    if (!phoneRegex.test(phone) || phone === '1234567890') {
        showError('phoneError', 'Enter a valid 10-digit phone number.');
        isValid = false;
    }

    // Validate Password
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        showError('passwordError', 'Password must be at least 8 characters long and not "password" or your name.');
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can add code to actually submit the form data, such as sending it to a server or processing it further.
    }
}

// Function to show error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message; // Set the error message
}

// Function to clear previous error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.text-danger');
    errorElements.forEach(element => {
        element.textContent = ''; // Clear the error message
    });
}

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', validateForm);

// Optional: Event listeners for real-time validation on input change
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', clearErrors); // Clear errors on input change
});