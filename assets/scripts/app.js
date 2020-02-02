const defaultResult = 0;
let currentResult = defaultResult;
let history = [0,2,6,8];

function getUserInput() {
    return parseInt(userInput.value);
}

function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
<<<<<<< HEAD
    currentResult += enteredNumber;
=======
    currentResult = currentResult + +enteredNumber;
>>>>>>> 8631a8a48900cda91b03002a3cd8949fa14e1a4c
    creatAndWriteOutput('+', initialResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
<<<<<<< HEAD
    currentResult -= enteredNumber;
=======
    currentResult = currentResult + +enteredNumber;
>>>>>>> 8631a8a48900cda91b03002a3cd8949fa14e1a4c
    creatAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
<<<<<<< HEAD
    currentResult *= enteredNumber;
=======
    currentResult = currentResult + +enteredNumber;
>>>>>>> 8631a8a48900cda91b03002a3cd8949fa14e1a4c
    creatAndWriteOutput('*', initialResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
<<<<<<< HEAD
    currentResult /= enteredNumber;
=======
    currentResult = currentResult + +enteredNumber;
>>>>>>> 8631a8a48900cda91b03002a3cd8949fa14e1a4c
    creatAndWriteOutput('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);