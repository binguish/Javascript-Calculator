let currentOperand = document.querySelector("[data-display]");
let previousOperand = document.querySelector("[data-previousOperand]");
let operator = document.querySelector("[data-currentOperator]");
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
    //console.log(current, previous, sum);
    return `${sum}`;
};

const subtract = (current, previous) => {
    return current - previous;
};

const multiply = (current, previous) => {
    return current * previous;
};

const divide = (current, previous) => {
    return current / previous;
};



// Events

numeralButton.forEach(button => {
    button.addEventListener("click", () => {
        currentOperand.innerText = append(currentOperand.innerText, button.innerText);
    
    })
});

operatorButton.forEach(button => {
    button.addEventListener("click", () => {
        previousOperand.innerText = currentOperand.innerText;
        currentOperand.innerText = '';

        operator.innerText = button.innerText;
    })
});

equalsButton.addEventListener("click", () => {
    switch (operator.innerText) {
        case '+':
            
            currentOperand.innerText = add(currentOperand.innerText, previousOperand.innerText);
            break;
    }
})

clearButton.addEventListener("click", () => {
    currentOperand.innerText = '';
    previousOperand.innerText = '';
});