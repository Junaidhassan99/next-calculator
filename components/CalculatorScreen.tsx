import { useCallback, useEffect, useRef, useState } from "react";
import {
  buttonKeyPlaceHolder,
  handlerForKeys,
  updateScreenText,
} from "../store/calculator-slice";
import { useAppSelector, useAppDispatch } from "../store/hooks";

import classes from "../styles/calculator-home-screen.module.css";

const CalculatorScreen = () => {
  const calculatorSelector = useAppSelector(
    (state) => state.calculator.screenText
  );

  const calculatorDispatch = useAppDispatch();

  const screenInputRef = useRef<HTMLInputElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  function screenInputKeyHandler(eventKey: any) {
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "+",
      "-",
      "*",
      "/",
      "Enter",
      "Backspace",
    ];

    function getButtonKeyForText(keyText: string) {
      return buttonKeyPlaceHolder.find((x) => x.text === keyText)!;
    }

    eventKey.preventDefault();

    if (allowedKeys.includes(eventKey.key)) {
      if (eventKey.key === "Enter") {
        calculatorDispatch(handlerForKeys(getButtonKeyForText("=")));
      } else if (eventKey.key === "Backspace") {
        calculatorDispatch(handlerForKeys(getButtonKeyForText("backspace")));
      } else {
        calculatorDispatch(handlerForKeys(getButtonKeyForText(eventKey.key)));
      }
    }
  }

  useEffect(() => {
    //automatically focus input field when input changes
    screenInputRef.current?.focus();

    //scroll to the end of input field when input changes
    const fontSizeOfInputScreen = +getComputedStyle(
      parentRef.current?.firstElementChild!
    )
      .getPropertyValue("font-size")
      .replace("px", "");

    screenInputRef.current?.scroll(
      calculatorSelector.length * fontSizeOfInputScreen,
      0
    );
  }, [calculatorSelector]);

  return (
    <div ref={parentRef}>
      <input
        className={classes["calculator-screen"]}
        type="text"
        value={calculatorSelector}
        ref={screenInputRef}
        onKeyDown={screenInputKeyHandler}
      ></input>
    </div>
  );
};

export default CalculatorScreen;
