import { useAppSelector, useAppDispatch } from "../store/hooks";

import { ButtonKeyType, onShiftClick } from "../store/calculator-slice";

import classes from "../styles/calculator-home-screen.module.css";

const CalclatorButton: React.FC<{
  buttonKey: ButtonKeyType;
}> = ({ children, buttonKey }) => {
  const calculatorDispatch = useAppDispatch();

  return buttonKey.isVisible ? (
    <button
      className={
        buttonKey.isBigSize === true ? classes["button-item"] : undefined
      }
      onClick={() => {
        if (buttonKey.id === "k-46") {
          calculatorDispatch(onShiftClick());
        }
      }}
    >
      {buttonKey.text}
    </button>
  ) : null;
};

export default CalclatorButton;
