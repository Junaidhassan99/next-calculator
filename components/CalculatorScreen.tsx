import { useCallback, useEffect, useRef, useState } from "react";
import { handlerForKeys, updateScreenText } from "../store/calculator-slice";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import InputScreen from "./InputScreen";

import { isMobile } from "react-device-detect";

// import classes from "../styles/calculator-home-screen.module.css";

const mAllowedKeys = [
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

const CalculatorScreen: React.FC<{
  isShiftSelected: boolean;
}> = ({ children, isShiftSelected }) => {
  const calculatorSelector = useAppSelector(
    (state) => state.calculator.screenText
  );

  const buttonKeysSelector = useAppSelector(
    (state) => state.calculator.buttonKeys
  );

  const calculatorDispatch = useAppDispatch();

  const screenInputRef = useRef<HTMLInputElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  function mOnKeyDown(keyValue: string) {
    function getButtonKeyForText(keyText: string) {
      return buttonKeysSelector.find((x) => x.text === keyText)!;
    }

    if (keyValue === "Enter") {
      calculatorDispatch(handlerForKeys(getButtonKeyForText("=")));
    } else if (keyValue === "Backspace") {
      calculatorDispatch(handlerForKeys(getButtonKeyForText("backspace")));
    } else {
      calculatorDispatch(handlerForKeys(getButtonKeyForText(keyValue)));
    }
  }

  useEffect(() => {
    if (!isMobile) {
      //automatically focus input field when input changes
      screenInputRef.current?.focus();
    }

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
      <InputScreen
        additionalClasses={`${isShiftSelected && "calculator-screen-shift-h"} `}
        allowedKeys={mAllowedKeys}
        inputRef={screenInputRef}
        inputValue={calculatorSelector}
        onKeyDown={mOnKeyDown}
      />
    </div>
  );
};

export default CalculatorScreen;
