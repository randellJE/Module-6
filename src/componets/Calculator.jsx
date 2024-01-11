import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const parseAndSetNum1 = (value) => setNum1(parseFloat(value) || 0);
  const parseAndSetNum2 = (value) => setNum2(parseFloat(value) || 0);

  const handleOperator = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    let res = 0;
    switch (operator) {
      case "+":
        res = parsedNum1 + parsedNum2;
        break;
      case "-":
        res = parsedNum1 - parsedNum2;
        break;
      case "*":
        res = parsedNum1 * parsedNum2;
        break;
      case "/":
        res = num2 !== "0" ? parsedNum1 / parsedNum2 : "Cannot divide by zero";
        break;
      default:
        console.error("Unexpected operator:", operator);
        break;
    }

    setResult((prevResult) => res);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => parseAndSetNum1(e.target.value)} />
      <br />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <br />
      <input type="number" value={num2} onChange={(e) => parseAndSetNum2(e.target.value)} />
      <br />
      <button onClick={handleOperator}>=</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;
