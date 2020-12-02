function add(a,b){
    return a+b;
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
    let result;
    if(op == '+'){
        result = add(a,b);
    } else if (op == '-'){
        result = subtract(a,b);
    } else if (op == '*') {
        result = multiply(a,b);
    } else if (op == '/') {
        result = divide(a,b);
    }
    return result;
}