import React from "react";

function Math(props) {
  const num1 = parseInt(props.num1);
  const num2 = parseInt(props.num2);
  let answer;

  switch (props.operator) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "x":
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
    default:
      answer = "Invalid operator";
  }

  return <h1>{answer}</h1>;
}

export default Math;
