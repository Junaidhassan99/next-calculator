import { useAppSelector, useAppDispatch } from "../store/hooks";

import { ButtonKeyType, handlerForKeys } from "../store/calculator-slice";

import { Fragment } from "react";

const CalclatorButton: React.FC<{
  buttonKey: ButtonKeyType;
}> = ({ children, buttonKey }) => {
  const calculatorDispatch = useAppDispatch();

  const keyHoldCheck = useAppSelector((state) => state.calculator);

  const isInv = buttonKey.text.endsWith("-1");

  function removeInv() {
    if (isInv) {
      return buttonKey.text.substring(0, buttonKey.text.length - "-1".length);
    } else {
      return buttonKey.text;
    }
  }

  function buttonClickHandler() {
    calculatorDispatch(handlerForKeys(buttonKey));
  }

  function backgroundColorClassForKeyHold() {
    if (
      (keyHoldCheck.isHypSelected && buttonKey.text === "hyp") ||
      (keyHoldCheck.isShiftSelected && buttonKey.text === "shift")
    ) {
      return "dark-component-button-hold";
    } else {
      return "dark-component-button-click dark-component-hover";
    }
  }

  console.log(buttonKey.text);

  return (
    <Fragment>
      {buttonKey.isVisible ? (
        <button
          key={buttonKey.text}
          className={`button-item-padding button-item
          } ${backgroundColorClassForKeyHold()} default-border dark-component  ${
            buttonKey.isHeightDouble && "double-row-size"
          }`}
          onClick={buttonClickHandler}
        >
          <div className={isInv ? "inv-case-button-item-container" : undefined}>
            <div>{removeInv()}</div>
            {isInv && <div className={"inv-case-button-item"}>-1</div>}
          </div>
        </button>
      ) : null}
    </Fragment>
  );
};

export default CalclatorButton;
