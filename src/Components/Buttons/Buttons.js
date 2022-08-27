import React from "react";
import { ACTIONS } from "../CalculatorBody/CalculatorBody";

function Buttons({ dispatch }) {
  const buttons = [
    { value: "AC", id: "clear", class: " button red", type: "clear" },
    { value: "DEL", id: "delete", class: "button", type: "delete" },
    { value: "/", id: "divide", class: "button", type: "operation" },
    { value: "*", id: "multiply", class: "button", type: "operation" },
    { value: "7", id: "seven", class: "button", type: "digit" },
    { value: "8", id: "eight", class: "button", type: "digit" },
    { value: "9", id: "nine", class: "button", type: "digit" },
    { value: "+", id: "add", class: "button", type: "operation" },
    { value: "4", id: "four", class: "button", type: "digit" },
    { value: "5", id: "five", class: "button", type: "digit" },
    { value: "6", id: "six", class: "button", type: "digit" },
    { value: "-", id: "subtract", class: "button", type: "operation" },
    { value: "1", id: "one", class: "button", type: "digit" },
    { value: "2", id: "two", class: "button", type: "digit" },
    { value: "3", id: "three", class: "button", type: "digit" },
    {
      value: "=",
      id: "equals",
      class: "button span-two-tall green",
      type: "evaluate",
    },
    { value: "0", id: "zero", class: "span-two button", type: "digit" },
    { value: ".", id: "decimal", class: "button", type: "digit" },
  ];
  return (
    <>
      {buttons.map((oneButton) => (
        <button
          key={oneButton.id}
          id={oneButton.id}
          className={oneButton.class}
          onClick={() =>
            oneButton.type === "digit"
              ? dispatch({
                  type: ACTIONS.ADD_DIGIT,
                  payload: { digit: oneButton.value },
                })
              : oneButton.type === "operation"
              ? dispatch({
                  type: ACTIONS.CHOOSE_OPERATION,
                  payload: { operation: oneButton.value },
                })
              : oneButton.type === "clear"
              ? dispatch({
                  type: ACTIONS.CLEAR,
                })
              : oneButton.type === "evaluate"
              ? dispatch({
                  type: ACTIONS.EVALUATE,
                  payload: { operation: oneButton.value },
                })
              : oneButton.type === "delete"
              ? dispatch({
                  type: ACTIONS.DELETE_DIGIT,
                })
              : ""
          }
        >
          {oneButton.value}
        </button>
      ))}
    </>
  );
}

export default Buttons;
