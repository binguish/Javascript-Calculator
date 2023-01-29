let currentOperand = document.querySelector("[data-display]");
let previousOperand = document.querySelector("[data-previousOperand]");
let operator = document.querySelector("[data-operatorDisplay]");
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
                console.log(clicked)
                currentOperand.innerText = append(currentOperand.innerText, button.innerText);
            }
            
    })
});

operatorButton.forEach(button => {
    button.addEventListener("click", () => {
        operator.innerText = button.innerText;
        clicked = true;
        if (previousOperand.innerText) {
            previousOperand.innerText = currentOperand.innerText
            switch (operator.innerText) {
                case '+':
                    currentOperand.innerText = add(currentOperand.innerText, previousOperand.innerText);
                    
                    break;
                case '-':
                    currentOperand.innerText = subtract(currentOperand.innerText, previousOperand.innerText);
                    break;
                case '*':
                    currentOperand.innerText = multiply(currentOperand.innerText, previousOperand.innerText);
                    break;
                case '/':
                    currentOperand.innerText = divide(currentOperand.innerText, previousOperand.innerText);
                    break;
                
            }
        } else {

            previousOperand.innerText = currentOperand.innerText;
        }

    })
});

equalsButton.addEventListener("click", () => {
    switch (operator.innerText) {
        case '+':
            currentOperand.innerText = add(currentOperand.innerText, previousOperand.innerText);
            break;
        case '-':
            currentOperand.innerText = subtract(currentOperand.innerText, previousOperand.innerText);
            break;
        case '*':
            currentOperand.innerText = multiply(currentOperand.innerText, previousOperand.innerText);
            break;
        case '/':
            currentOperand.innerText = divide(currentOperand.innerText, previousOperand.innerText);
            break;
        
    }
})

clearButton.addEventListener("click", () => {
    currentOperand.innerText = '';
    previousOperand.innerText = '';
    operator.innerText = '';
});