import React, { useState } from 'react';


function App() {
  const [display, setDisplay] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operation, setOperation] = useState('');

  function handleButtonPress(label) {
    if (label === 'C') {
      clearDisplay();
    } else if (label === '+' || label === '-' || label === '*' || label === '/') {
      handleOperation(label);
    } else if (label === '=') {
      calculate();
    } else {
      updateDisplay(label);
    }
  }

  function clearDisplay() {
    setDisplay('0');
    setCurrentNumber('');
    setPreviousNumber('');
    setOperation('');
  }

  function handleOperation(op) {
    if (currentNumber) {
      setPreviousNumber(currentNumber);
      setCurrentNumber('');
      setOperation(op);
    }
  }

  function updateDisplay(label) {
    if (display === '0' && label !== '.') {
      setDisplay(label);
    } else {
      setDisplay(display + label);
    }
    setCurrentNumber(currentNumber + label);
  }

  function calculate() {
    if (previousNumber && currentNumber) {
      const num1 = parseFloat(previousNumber);
      const num2 = parseFloat(currentNumber);
      let result;
      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          return;
      }
      setDisplay(result.toString());
      setCurrentNumber(result.toString());
      setPreviousNumber('');
      setOperation('');
    }
  }

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="button" onClick={() => handleButtonPress('7')}>7</button>
        <button className="button" onClick={() => handleButtonPress('8')}>8</button>
        <button className="button" onClick={() => handleButtonPress('9')}>9</button>
        <button className="button operation-button" onClick={() => handleButtonPress('+')}>+</button>
        <button className="button" onClick={() => handleButtonPress('4')}>4</button>
        <button className="button" onClick={() => handleButtonPress('5')}>5</button>
        <button className="button" onClick={() => handleButtonPress('6')}>6</button>
        <button className="button operation-button" onClick={() => handleButtonPress('-')}>-</button>
        <button className="button" onClick={() => handleButtonPress('1')}>1</button>
        <button className="button" onClick={() => handleButtonPress('2')}>2</button>
        <button className="button" onClick={() => handleButtonPress('3')}>3</button>
        <button className="button operation-button" onClick={() => handleButtonPress('*')}>*</button>
        <button className="button" onClick={() => handleButtonPress('0')}>0</button>
        <button className="button" onClick={() => handleButtonPress('.')}>.</button>
        <button className="button operation-button" onClick={() => handleButtonPress('=')}>=</button>
        <button className="button operation-button" onClick={() => handleButtonPress('/')} >/</button>
        <button className="button clear-button" onClick={() => handleButtonPress('C')}>C</button>
      </div>
    </div>
  );
}

export default App
