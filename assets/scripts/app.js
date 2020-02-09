const defaultResult = 0;
let currentResult = defaultResult;
<<<<<<< HEAD
let logEntries = [];
=======
let history = [0, 2, 6, 8];
>>>>>>> cd55e333823ddae90f05549c493c75a6b87fa768

function getUserInput() {
  return parseInt(userInput.value);
}

function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

<<<<<<< HEAD
function writeToLog(
  operationIdentifier,
  previousResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: previousResult,
    inputNumber: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

=======
>>>>>>> cd55e333823ddae90f05549c493c75a6b87fa768
function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
<<<<<<< HEAD
  creatAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
=======

  currentResult = currentResult + +enteredNumber;
  creatAndWriteOutput("+", initialResult, enteredNumber);
>>>>>>> cd55e333823ddae90f05549c493c75a6b87fa768
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
<<<<<<< HEAD
  currentResult -= enteredNumber;
  creatAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
=======

  currentResult -= enteredNumber;

  currentResult = currentResult + +enteredNumber;

  creatAndWriteOutput("-", initialResult, enteredNumber);
>>>>>>> cd55e333823ddae90f05549c493c75a6b87fa768
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
<<<<<<< HEAD
  currentResult *= enteredNumber;
  creatAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
=======

  currentResult *= enteredNumber;

  currentResult = currentResult + +enteredNumber;

  creatAndWriteOutput("*", initialResult, enteredNumber);
>>>>>>> cd55e333823ddae90f05549c493c75a6b87fa768
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
<<<<<<< HEAD
  creatAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
=======

  currentResult = currentResult + +enteredNumber;
  creatAndWriteOutput("/", initialResult, enteredNumber);
>>>>>>> cd55e333823ddae90f05549c493c75a6b87fa768
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
<<<<<<< HEAD
divideBtn.addEventListener("click", divide);
=======
divideBtn.addEventListener("click", divide);
>>>>>>> cd55e333823ddae90f05549c493c75a6b87fa768
