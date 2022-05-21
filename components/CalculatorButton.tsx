import { useAppSelector, useAppDispatch } from "../store/hooks";

import { ButtonKeyType, handlerForKeys } from "../store/calculator-slice";

import React, { Fragment } from "react";

import { FaBackspace } from "react-icons/fa";

const CalclatorButton: React.FC<{
  buttonKey: ButtonKeyType;
}> = ({ children, buttonKey }) => {
  const calculatorDispatch = useAppDispatch();

  const keyHoldCheck = useAppSelector((state) => state.calculator);

  const isInv = buttonKey.text.endsWith("-1");

  const buttonIcons: { [key: string]: JSX.Element } = {
    backspace: <FaBackspace />,
  };

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

  return (
    <Fragment>
      {buttonKey.isVisible ? (
        <button
          key={buttonKey.text}
          className={`button-item-padding button-item
          } ${backgroundColorClassForKeyHold()} default-border dark-component dark-component-text-color ${
            buttonKey.isHeightDouble && "double-row-size"
          }`}
          onClick={buttonClickHandler}
        >
          <div className={isInv ? "inv-case-button-item-container" : undefined}>
            {buttonIcons[buttonKey.text] !== undefined ? (
              <div>{buttonIcons[buttonKey.text]}</div>
            ) : (
              <div>{removeInv()}</div>
            )}
            {isInv && <div className={"inv-case-button-item"}>-1</div>}
          </div>
        </button>
      ) : null}
    </Fragment>
  );
};

export default React.memo( CalclatorButton);
