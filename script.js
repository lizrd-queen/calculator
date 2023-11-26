let num1 = 0;
let num2 = 0
let operator = '';

function setOperator(selectedOperator) {
    operator = selectedOperator;
    num1 = parseFloat(currentInput);
    currentInput = '';
}


function add (a, b){
    return (a+b);
}
function subtract(a,b){
    return(a-b);
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a/b
}