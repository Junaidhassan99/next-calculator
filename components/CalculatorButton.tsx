import { useAppSelector, useAppDispatch } from "../store/hooks";

import { ButtonKeyType, onShiftClick } from "../store/calculator-slice";

import classes from "../styles/calculator-home-screen.module.css";

const CalclatorButton: React.FC<{
  buttonKey: ButtonKeyType;
}> = ({ children, buttonKey }) => {
  const calculatorDispatch = useAppDispatch();

  if (buttonKey.id === "k-d") {
    return <div></div>;
  } else if (buttonKey.isVisible) {
    return (
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
        {/* {`${buttonKey.text} - ${buttonKey.id}`} */}
      </button>
    );
  } else {
    return null;
  }
};

export default CalclatorButton;
