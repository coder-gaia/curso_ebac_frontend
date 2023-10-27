document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-pctg');
    const resultElement = document.getElementById('result-value');

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();

        const numberInput = document.getElementById('number');
        const percentageInput = document.getElementById('pctg');

        const number = parseFloat(numberInput.value);
        const percentageInputValue = percentageInput.value;

        const percentage = parseFloat(percentageInputValue);

        const result = (number * percentage) / 100;
        resultElement.textContent = result; 
        document.querySelector('.result').style.display = 'block'

        numberInput.value = ""
        percentageInput.value = ""
    });
});
