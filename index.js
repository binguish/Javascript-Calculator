let currentOperand = document.querySelector("[data-display]");
let previousOperand = document.querySelector("[data-previousOperand]");
let operator = document.querySelector("[data-operatorDisplay]");
let runningTotal = 0;
const numeralButton = document.querySelectorAll("[data-numeral]");
const operatorButton = document.querySelectorAll("[data-operator]");
const clearButton = document.querySelector("[data-clear]");
const equalsButton = document.querySelector("[data-equals]")






// Functions

const append = (current, numToAppend) => {
    if (!parseInt(current) && numToAppend != ".") {
        console.log(parseInt(numToAppend))
        return numToAppend;
    } else if (parseInt(current)) {
        if (numToAppend === '.' && current.includes('.')) {   
            return current;
        } else {
            return current + numToAppend;
        }
    } 
}


const add = (current, previous) => {
    let sum = parseFloat(current) + parseFloat(previous);
    return `${sum}`;
};

const subtract = (current, previous) => {
    let difference = parseFloat(previous) - parseFloat(current);
    return difference.toString();
};

const multiply = (current, previous) => {
    let product = parseFloat(current) * parseFloat(previous);
    return product.toString();
};

const divide = (current, previous) => {
    let quotient = parseFloat(previous) / parseFloat(current);
    return quotient.toString();
};



// Events
let clicked;

numeralButton.forEach(button => {
    button.addEventListener("click", () => {
            if (clicked) {
                currentOperand.innerText = button.innerText;
                clicked = false;
            } else {
                currentOperand.innerText = append(currentOperand.innerText, button.innerText);
            }
            
    })
});

operatorButton.forEach(button => {
    button.addEventListener("click", () => {
        operator.innerText = button.innerText;
        clicked = true;
        if (previousOperand.innerText) {
            switch (operator.innerText) {
                case '+':
                    runningTotal = add(currentOperand.innerText, previousOperand.innerText);
                    break;
                case '-':
                    runningTotal = subtract(currentOperand.innerText, previousOperand.innerText);
                    break;
                case '*':
                    runningTotal = multiply(currentOperand.innerText, previousOperand.innerText);
                    break;
                case '/':
                    runningTotal = divide(currentOperand.innerText, previousOperand.innerText);
                    break;
                }
            previousOperand.innerText = runningTotal;
            currentOperand.innerText = runningTotal;
        } else {

            previousOperand.innerText = currentOperand.innerText;
        }

    })
});

const clearOnEquals = () => {
    previousOperand.innerText = "";
    operator.innerText = "";
    runningTotal = 0;
}

equalsButton.addEventListener("click", () => {
    switch (operator.innerText) {
        case '+':
            currentOperand.innerText = add(currentOperand.innerText, previousOperand.innerText);
            clearOnEquals();
            break;
        case '-':
            currentOperand.innerText = subtract(currentOperand.innerText, previousOperand.innerText);
            clearOnEquals();
            break;
        case '*':
            currentOperand.innerText = multiply(currentOperand.innerText, previousOperand.innerText);
            clearOnEquals();
            break;
        case '/':
            currentOperand.innerText = divide(currentOperand.innerText, previousOperand.innerText);
            clearOnEquals();
            break;
        
    }
})

clearButton.addEventListener("click", () => {
    currentOperand.innerText = '';
    previousOperand.innerText = '';
    operator.innerText = '';
    runningTotal = 0;
});