import React from "react";

function Display(props) {
  return (
    <div id="display">
      <div className="previous-operand">
        {props.previousOperand} {props.operation}
      </div>
      <div className="current-operand">
        {props.currentOperand}
      </div>
    </div>
  );
}

export default Display;
