import { useAppSelector, useAppDispatch } from "../store/hooks";

import {
  ButtonKeyType,
  onShiftClick,
  addTextToScreen,
  removeFromScreen,
  clearLastNumber,
  clearScreen,
} from "../store/calculator-slice";

import classes from "../styles/calculator-home-screen.module.css";
import { Fragment } from "react";

const CalclatorButton: React.FC<{
  buttonKey: ButtonKeyType;
}> = ({ children, buttonKey }) => {
  const calculatorDispatch = useAppDispatch();

  function buttonClickHandler() {
    switch (buttonKey.text) {
      case "shift": {
        calculatorDispatch(onShiftClick());
        break;
      }
      case "backspace": {
        calculatorDispatch(removeFromScreen());
        break;
      }
      case "CE": {
        calculatorDispatch(clearLastNumber());
        break;
      }
      case "C": {
        calculatorDispatch(clearScreen());
        break;
      }
      default: {
        calculatorDispatch(addTextToScreen(buttonKey.text));
        break;
      }
    }
  }

  return (
    <Fragment>
      {buttonKey.isVisible ? (
        <button
          key={buttonKey.text}
          className={`${classes["button-item"]} ${
            buttonKey.isHeightDouble && classes["double-row-size"]
          }`}
          onClick={buttonClickHandler}
        >
          {buttonKey.text}
        </button>
      ) : null}
    </Fragment>
  );
};

export default CalclatorButton;
