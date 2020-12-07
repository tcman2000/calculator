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
    }
    console.log(result);
    return result;
}

//main
let display = document.querySelector('#screen');
let numbers = document.querySelectorAll('.num');
let a = null;
let b = null;
let op = null;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        let digit = parseInt(number.textContent);
        if(op==null){
            if(a==null){
                a=digit;                
            } else {
                a = a*10 + digit;
            }
        } else {
            if(b==null){
                b=digit;
            } else {
                b = b*10 + digit;
            }
        }
        display.appendChild(document.createTextNode(digit));
    })
})

let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    a = null;
    b = null;
    op = null;
})

let operators = document.querySelectorAll('.funct');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        let sign = operator.getAttribute('id');
        if(b !=null){
            if(op='/' && b==0){
                alert("why are you dividing by zero?");
            }
            let solution = operate(op, a, b);
            display.textContent = '';
            display.appendChild(document.createTextNode(solution));
            a = solution;
            b = null;
            op = null;
        }   
        if(op == null) {
            switch(sign){
                case "add":
                    op = '+';
                    display.appendChild(document.createTextNode(op));
                    break;
                case "subtract":
                    op = "-";
                    display.appendChild(document.createTextNode(op));
                    break;
                case "multiply":
                    op = "*";
                    display.appendChild(document.createTextNode(op));
                    break;
                case "divide":
                    op = "/"
                    display.appendChild(document.createTextNode(op));
                    break;
                case "root":
                    op = "√";
                    display.appendChild(document.createTextNode(op));
                    break;
                case "power":
                    op = "^";
                    display.appendChild(document.createTextNode(op));
                    break;
                default:
            }
        }

    })
})
