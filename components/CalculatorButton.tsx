import { useAppSelector, useAppDispatch } from "../store/hooks";

import { ButtonKeyType, handlerForKeys } from "../store/calculator-slice";

import classes from "../styles/calculator-home-screen.module.css";
import { Fragment } from "react";

const CalclatorButton: React.FC<{
  buttonKey: ButtonKeyType;
}> = ({ children, buttonKey }) => {
  const calculatorDispatch = useAppDispatch();

  function buttonClickHandler() {
    calculatorDispatch(handlerForKeys(buttonKey));
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
