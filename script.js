
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

function decimalSwitch() {
    if (display.textContent.includes('.')) decimal.disabled = true;
    else decimal.disabled = false;
}

// function ()

let firstNum = 0;
let secondNum = 0;
let operator = '';

const operands = document.querySelectorAll('.operand>button');
const opAndCal = document.querySelectorAll('.op-button>button');
const resetAndErase = document.querySelectorAll('#reset-and-percent>button');
const decimal = document.querySelector('#decimal');
let display = document.querySelector('#display-text');
let secondDisplay = document.querySelector('.second-display');
let opDisplay = document.querySelector('#op-display');
console.log(resetAndErase)


operands.forEach(item => {
    item.addEventListener('click', (e) => {
        if (display.textContent.length < 15) {
            display.textContent += e.target.value;
            decimalSwitch()
        }
    })
})

opAndCal.forEach(item => {
    item.addEventListener('click', e => {
        if (!firstNum) {
            firstNum = secondDisplay.textContent = parseFloat(display.textContent)
            display.textContent = ''
        } else if (e.target.id === 'operate') {
            secondNum = parseFloat(display.textContent)
            display.textContent = operate(operator, firstNum, secondNum)
            console.log(display.textContent)
            reset()
        }
        decimalSwitch()
        operator = e.target.value;
        opDisplay.textContent = e.target.value;
        console.log(firstNum, operator, secondNum, checkNaN(firstNum))
    })
})

console.log(!display.textContent.includes('-'))
resetAndErase.forEach(item => {
    item.addEventListener('click', e => {
        let disp = display.textContent
        decimalSwitch()
        switch (e.target.id) {
            case 'reset':
                firstNum = 0;
                secondNum = 0;
                display.textContent = '';
                secondDisplay.textContent = '';
                opDisplay.textContent = '';
                operator = '';
                break;
            case 'sign':
                if (!disp.includes('-')) {
                    display.textContent = '-'.concat(disp)
                } else {
                    display.textContent = disp.slice(1);
                }
                break;
            case 'erase':
                display.textContent = disp.slice(0, -1)
                break;

        }
    })
})