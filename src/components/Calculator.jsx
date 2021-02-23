import React from "react";
import Math from "./Math";

// function Calculator(props) {
//   return (
//     <div>
//       <form>
//         <div className="form-group">
//           <input type="text" className="form-control" id="num1" value="2" placeholder="2"></input>
//           <input type="text" className="form-control" id="operator" value="x" placeholder="x"></input>
//           <input type="text" className="form-control" id="num2" value="2" placeholder="2"></input>
//           <h2 type="submit" className="btn btn-success">
//             =
//           </h2>
//           <Math
//             num1={document.getElementById("num1").value}
//             operator={document.getElementById("operator").value}
//             num2={document.getElementById("num2").value}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

class Calculator extends React.Component {
  state = {
    result: 0,
  };

  calculate = (num1, operator, num2) => {
    let answer;

    switch (operator) {
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

    this.setState({ result: answer });
  };
}

export default Calculator;
