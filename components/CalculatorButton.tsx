import { ButtonKeyType } from "../store/calculator-slice";

const CalclatorButton: React.FC<{
  buttonKey: ButtonKeyType;
}> = ({ children, buttonKey }) => {
  return <button>{buttonKey.text}</button>;
};

export default CalclatorButton;
