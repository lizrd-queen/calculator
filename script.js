let num1 = 0;
let num2 = 0
let operator = '';
let currentInput = '';

function setOperator(selectedOperator) {
    operator = selectedOperator;
    num1 = parseFloat(currentInput);
    displayInput(num1 + '' + operator);
    currentInput = '';
}

function displayInput(text) {
    document.querySelector('.screen').textContent = text;
}

function calculateResult(){
    if( operator && currentInput !== ''){
        num2 = parseFloat(currentInput);
    }
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        case '/':
            if (num2 !== 0){
                result = divide(num1,num2);}
            else result = 'bruh';
            

            
    }
    displayInput(result);
    
        

}
function clearInput() {
    currentInput = '';
    displayInput(currentInput);
}

function clearAll() {
    currentInput = '';
    operator = '';
    num1 = 0;
    num2 = 0;
    displayInput(currentInput);
}

function handleNumber(value){
    currentInput += value;
    displayInput(currentInput);
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