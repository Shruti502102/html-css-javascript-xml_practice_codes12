// script.js

function calculateFactorial() {
    const number = document.getElementById('number').value;
    let result = 1;

    if (number === "" || number < 0) {
        document.getElementById('niet').innerText = "Please enter a non-negative number.";
        return;
    }

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    document.getElementById('niet').innerText = `The factorial of ${number} is ${result}.`;
}
