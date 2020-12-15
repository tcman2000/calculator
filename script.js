let display = document.querySelector('#screen');

function locOfOp(equation){
    let index = equation.indexOf('+');
    if(index == -1){
        index = equation.indexOf('-');
    }
    if(index == -1){
        index = equation.indexOf('*');
    }
    if(index == -1){
        index = equation.indexOf('/');
    }
    if(index == -1){
        index = equation.indexOf('^');
    }
    if(index == -1){
        index = equation.indexOf('√');
    }
    return index;
}

//functions
function add(a,b){
    return (a+b);
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function power(a,b){
    return Math.pow(a, b);
}

function root(a,b){
    return Math.sqrt(a,b);
}

function operate(op, a, b) {
    let result = null;
    if(op == '+'){
        result = add(a,b);
    } else if (op == '-'){
        result = subtract(a,b);
    } else if (op == '*') {
        result = multiply(a,b);
    } else if (op == '/') {
        result = divide(a,b);
    } else if (op == '^') {
        result = power(a,b);
    } else {
        result = root(b,a);
    }
    console.log(result);
    return result;
}

//main
let operations = ['+', '-', '/', '*', '^', '√'];

let numbers = document.querySelectorAll('.num');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent += number.textContent;
    })
})

let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '';
})

let back = document.querySelector('#backspace');
back.addEventListener('click', () => {
    let equation = display.textContent;
    display.textContent = equation.substring(0, equation.length-1);
})

let operators = document.querySelectorAll('.funct');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        let selectedOperator = operator.textContent;
        let equation = display.textContent;
        let opIndex = locOfOp(equation);
        if(opIndex != -1 && opIndex != equation.length - 1){
                let a = Number.parseInt(equation.substring(0, opIndex));
                let op = equation.charAt(opIndex);
                let b = Number.parseInt(equation.substring(opIndex+1, equation.length));
                let solution = operate(op,a,b);
                display.textContent = solution;
        }
        if(selectedOperator != '='){
            display.textContent += selectedOperator;
        }
    })
})
