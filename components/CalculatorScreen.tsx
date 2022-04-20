import { useCallback, useEffect, useRef, useState } from "react";
import { handlerForKeys, updateScreenText } from "../store/calculator-slice";
import { useAppSelector, useAppDispatch } from "../store/hooks";

// import classes from "../styles/calculator-home-screen.module.css";

const CalculatorScreen: React.FC<{
  isShiftSelected: boolean;
}> = ({ children, isShiftSelected }) => {
  const calculatorSelector = useAppSelector(
    (state) => state.calculator.screenText
  );

  console.log(calculatorSelector);

  const buttonKeysSelector = useAppSelector(
    (state) => state.calculator.buttonKeys
  );

  const calculatorDispatch = useAppDispatch();

  const screenInputRef = useRef<HTMLInputElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  console.log(`test 1: ${calculatorSelector}`);

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
      return buttonKeysSelector.find((x) => x.text === keyText)!;
    }

    eventKey.preventDefault();

    if (screen.width >= 500 && allowedKeys.includes(eventKey.key)) {
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
    <div className={"calculator-screen-parent"} ref={parentRef}>
      <input
        className={`${
          isShiftSelected && "calculator-screen-shift-h"
        } calculator-screen default-border dark-component-text-color dark-component`}
        type="text"
        defaultValue={calculatorSelector}
        ref={screenInputRef}
        onKeyDown={screenInputKeyHandler}
      ></input>
    </div>
  );
};

export default CalculatorScreen;
