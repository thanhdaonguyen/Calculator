//functions for operating maths expression


//adding two numbers
function add(a, b) {
    return a + b;
}

//subtracting two numbers
function subtract(a, b) {
    return a - b;
}

//multiplying two numbers
function multiply(a, b) {
    return a * b;
}

//deviding two numbers
function devide(a, b) {
    return a / b;
}

//devide by 100
function devide100(a) {
    return a / 100;
}


//the state of the operation 
const ADDING = '+';
const SUBTRACT = '-';
const MULTIPLY = '*';
const DEVIDE = '/';

// operating function
function operate(a, b, op) {
    const num1 = Number(a);
    const num2 = Number(b);
    if (op == ADDING) return add(num1, num2);
    else if (op == SUBTRACT) return subtract(num1, num2);
    else if (op == MULTIPLY) return multiply(num1, num2);
    else if (op == DEVIDE) return devide(num1, num2);
}

//clear function 
function clear() {
    num1 = '';
    num2 = '';
    op = '';
    res = '';
}

//assign the calculating function to key
const allKey = document.querySelectorAll('.key');
allKey.forEach( function(e) {
    e.addEventListener('click', () => {
        getInput(e);
        showRes();
    })
})

//variables for calculating
let num1 = '';
let num2 = '';
let op = '';
let res = '';

//get in the input function
function getInput(ele) {
    console.log(ele.dataset.key);
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    console.log('res: ' + res);
    console.log('op: ' + op );
    if (ele.dataset.key == '%') {
        if (num1 != '' && num2 == '') {
            num1 = Number(num1)/100;
            res = num1;
            op = ''
        }
        else if (num2 != '') {
            num2 = Number(num2)/100;
            res = num2;
        }
        return;
    }

    if (ele.dataset.key == '=') {
        if (num2 == '') {
            op = '';
            res = num1;
        }
        else {
            res = operate(num1, num2, op);
            num1 = res;
            if (Number(num1) == NaN || Number(num1) == Infinity) {
                num1 = '';
            }
            num2 = '';
            op = '';
        }
        return;
    }

    if (ele.dataset.key == 'allclear') {
        res = '';
        num1 = '';
        num2 = '';
        op = '';
        return;
    }

    if (ele.dataset.key == 'sign') {
        if (res != '') res = - Number(res);
        if (num2 == '') num1 = res;
        else num2 = res;
        return;
    }

    if (ele.dataset.key == '.') {
        if (String(res).includes('.')) return;
    }

    if (num1 == '') {
        console.log('num1 is empty')
        console.log(ele.classList)
        if(ele.classList.contains('num')) {
            console.log(ele.dataset.key);
            num1 += ele.dataset.key;
            res = num1;
        }
    }
    else if (num1 != '' && num2 == '') {
        console.log('num1 is not empty but num2 is')
        if(ele.classList.contains('operator')) {
            op = ele.dataset.key;
        }
        if(ele.classList.contains('num')) {
            if (op == '') {
                num1 += ele.dataset.key;
                res = num1;
            }
            else {
                num2 += ele.dataset.key;
                res = num2;
            }
        }
    }
    else if (num2 != '') {
        console.log('num1 and num2 are not empty')
        if(ele.classList.contains('operator')) {
            res = operate(num1, num2, ele.dataset.key);
            num1 = res;
            num2 = '';
            op = '';
        }
        if(ele.classList.contains('num')) {
            num2 += ele.dataset.key;
            res = num2;
        }
    }
}

//show the result
function showRes() {
    result = document.querySelector('#result');
    result.textContent = res;
    if (Number(res) == NaN) res = '';
}





