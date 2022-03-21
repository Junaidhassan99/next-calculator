import { useAppSelector, useAppDispatch } from "../store/hooks";

import {
  ButtonKeyGroupType,
  ButtonKeyType,
  onShiftClick,
} from "../store/calculator-slice";

import classes from "../styles/calculator-home-screen.module.css";
import { Fragment } from "react";

const CalclatorButton: React.FC<{
  buttonKeyGroup: ButtonKeyGroupType;
}> = ({ children, buttonKeyGroup }) => {
  const calculatorDispatch = useAppDispatch();

  const mId = buttonKeyGroup.id;

  return (
    <Fragment>
      {buttonKeyGroup.value.map((item) => {
        return item.isVisible ? (
          <button
            className={`${
              buttonKeyGroup.value.length === 1
                ? classes["button-item"]
                : undefined
            } ${mId === "k-d" ? classes["dummy-item"] : undefined}`}
            onClick={() => {
              if (item.text === "shift") {
                calculatorDispatch(onShiftClick());
              }
            }}
          >
            {item.text}
          </button>
        ) : null;
      })}
    </Fragment>
  );
};

export default CalclatorButton;
