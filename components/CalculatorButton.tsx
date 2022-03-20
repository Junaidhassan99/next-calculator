import { ButtonKeyType } from "../store/calculator-slice";

import classes from "../styles/calculator-home-screen.module.css";

const CalclatorButton: React.FC<{
  buttonKey: ButtonKeyType;
}> = ({ children, buttonKey }) => {
  return (
    <button
      className={
        buttonKey.isBigSize === true ? classes["button-item"] : undefined
      }
    >
      {buttonKey.text}
    </button>
  );
};

export default CalclatorButton;
