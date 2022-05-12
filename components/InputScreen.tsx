import { useCallback, useEffect, useRef, useState } from "react";
import { handlerForKeys, updateScreenText } from "../store/calculator-slice";
import { useAppSelector, useAppDispatch } from "../store/hooks";

// import classes from "../styles/calculator-home-screen.module.css";

const InputScreen: React.FC<{
  additionalClasses?: string;
  inputRef?: any;
  inputValue?: string;
  allowedKeys?: string[];
  onKeyDown?: (keyValue: string) => void;
}> = ({
  children,
  additionalClasses,
  inputRef,
  inputValue,
  allowedKeys,
  onKeyDown,
}) => {
  function screenInputKeyHandler(eventKey: any) {
    eventKey.preventDefault();

    if (
      allowedKeys != undefined &&
      onKeyDown != undefined &&
      screen.width >= 500 &&
      allowedKeys.includes(eventKey.key)
    ) {
      console.log(`test 1: ${eventKey.key}`);

      onKeyDown(eventKey.key);
    }
  }

  return (
    <input
      className={`${additionalClasses} calculator-screen default-border dark-component-text-color dark-component`}
      type="text"
      value={inputValue}
      ref={inputRef}
      onKeyDown={screenInputKeyHandler}
      onChange={(event) => {
        //do nothing
      }}
    ></input>
  );
};

export default InputScreen;
