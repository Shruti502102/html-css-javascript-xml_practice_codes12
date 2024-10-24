function validateForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameRegex = /^[A-Za-z\s]+$/;
    const nameError = document.getElementById('nameError');
    if (!nameRegex.test(name)) {
        nameError.textContent = "Name can only contain alphabets and spaces.";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Date of Joining validation
    const dateOfJoining = document.getElementById('dateOfJoining').value;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const dateError = document.getElementById('dateError');
    if (!dateRegex.test(dateOfJoining)) {
        dateError.textContent = "Please enter a valid date in YYYY-MM-DD format.";
        dateError.style.display = "block";
        isValid = false;
    } else {
        dateError.style.display = "none";
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('emailError');
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Phone number validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\d{10}$/;
    const phoneError = document.getElementById('phoneError');
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Phone number should be 10 digits.";
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }

    // Address validation
    const address = document.getElementById('address').value;
    const addressError = document.getElementById('addressError');
    if (address.trim() === '') {
        addressError.textContent = "Address cannot be empty.";
        addressError.style.display = "block";
        isValid = false;
    } else {
        addressError.style.display = "none";
    }

    // Pin code validation
    const pinCode = document.getElementById('pinCode').value;
    const pinCodeRegex = /^\d{6}$/;
    const pinError = document.getElementById('pinError');
    if (!pinCodeRegex.test(pinCode)) {
        pinError.textContent = "Pin code should be a 6-digit number.";
        pinError.style.display = "block";
        isValid = false;
    } else {
        pinError.style.display = "none";
    }

    // Gender validation
    const genderError = document.getElementById('genderError');
    if (!document.getElementById('male').checked && !document.getElementById('female').checked && !document.getElementById('other').checked) {
        genderError.textContent = "Please select your gender.";
        genderError.style.display = "block";
        isValid = false;
    } else {
        genderError.style.display = "none";
    }

    // State validation
    const state = document.getElementById('state').value;
    const stateError = document.getElementById('stateError');
    if (state === '') {
        stateError.textContent = "Please select your state.";
        stateError.style.display = "block";
        isValid = false;
    } else {
        stateError.style.display = "none";
    }

    return isValid;
}
