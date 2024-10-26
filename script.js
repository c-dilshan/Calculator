function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function toggleDarkMode() {
    const calculator = document.querySelector('.calculator');
    calculator.classList.toggle('dark');
    document.body.classList.toggle('dark');
}
