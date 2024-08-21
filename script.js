
function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2
}

function operate(op, num1, num2) {
    switch (op) {
        case "+":
            return add(num1, num2)
        case "-":
            return sub(num1, num2);
        case "*":
            return mul(num1, num2);
        case "/":
            return div(num1, num2);
    }
}

function reset() {
    firstNum = 0;
    secondNum = 0;
    operator = '';
    secondDisplay.textContent = '';
}

function checkNaN(number) {
    if (isNaN(parseFloat(number))) {
        secondDisplay.textContent = ''
        return true;
    }
    return false;
}

let firstNum = 0;
let secondNum = 0;
let operator = '';

const operands = document.querySelectorAll('.operand>button');
let display = document.querySelector('#display-text');
let secondDisplay = document.querySelector('.second-display');
let opDisplay = document.querySelector('#op-display');
const opAndCal = document.querySelectorAll('.op-button>button');

operands.forEach(item => {
    item.addEventListener('click', (e) => {
        if (display.textContent.length < 15) {
            display.textContent += e.target.value;
        }
    })
})

opAndCal.forEach(item => {
    item.addEventListener('click', e => {
        if (!firstNum) {
            firstNum = secondDisplay.textContent = parseFloat(display.textContent)
            display.textContent = ''
        } else if (e.target.id === 'operate'){
            secondNum = parseFloat(display.textContent)
            checkNaN(secondNum)
            display.textContent = operate(operator, firstNum, secondNum)
            console.log(display.textContent)
            reset()
        } 
        operator = e.target.value;
        opDisplay.textContent = e.target.value;
        console.log(firstNum, operator, secondNum, checkNaN(firstNum))
    })
})