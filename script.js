let firstNum = 0;
let secondNum = 0;
let operator = 0;

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

console.log(operate('+', 4, 5))