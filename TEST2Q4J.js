function generateTable() {
    const numberInput = document.getElementById('numberInput').value;
    const resultArea = document.getElementById('resultArea');
    const errorMessage = document.getElementById('errorMessage');
    
    // Clear previous messages and results
    resultArea.value = '';
    errorMessage.textContent = '';

    // Validate input
    if (isNaN(numberInput) || numberInput.trim() === '') {
        errorMessage.textContent = 'Please enter a valid number.';
        return;
    }

    const number = parseInt(numberInput);

    // Generate multiplication table
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${number} x ${i} = ${number * i}\n`;
    }

    // Display the table
    resultArea.value = table;
}
