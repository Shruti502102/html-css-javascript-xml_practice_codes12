// Array to store valid usernames and passwords
const validCredentials = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
];

function validateLogin() {
    // Get username and password from input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Find if there is a match in validCredentials array
    const valid = validCredentials.some(credentials => 
        credentials.username === username && credentials.password === password
    );

    // Display appropriate message
    const messageElement = document.getElementById('message');
    if (valid) {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.style.color = 'red';
    }
}

function resetForm() {
    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    // Clear the message
    document.getElementById('message').textContent = '';
}
