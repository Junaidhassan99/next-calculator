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
            key={item.text}
            className={`${
              buttonKeyGroup.value.length === 1 && classes["button-item-big"]
            } ${classes["button-item"]} ${
              buttonKeyGroup.id === "k-34" && classes["double-row-size"]
            }`}
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
