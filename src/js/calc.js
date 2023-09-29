const display = document.querySelector('.calculator__display');
const buttons = document.querySelectorAll('.calculator__button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('calculator__clear')) {
            display.value = '';
        } else if (button.classList.contains('calculator__equals')) {
            display.value = calculate(display.value);
        } else {
            display.value += button.innerText;
        }
    });
});

function calculate(expression) {
    const operators = ['*', '/', '+', '-'];
    const numbers = expression.split(new RegExp(`[${operators.join('')}]`));
    const operations = expression.split('').filter(char => operators.includes(char));
    let result = parseFloat(numbers[0]);

    for (let i = 0; i < operations.length; i++) {
        const number = parseFloat(numbers[i + 1]);

        switch (operations[i]) {
            case '*':
                result *= number;
                break;
            case '/':
                result /= number;
                break;
            case '+':
                result += number;
                break;
            case '-':
                result -= number;
                break;
        }
    }

    return result;
}
