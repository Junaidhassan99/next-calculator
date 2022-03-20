import { useAppSelector, useAppDispatch } from "../store/hooks";

const CalculatorScreen = () => {
  const calculatorSelector = useAppSelector(
    (state) => state.calculator.screenText
  );

  return <h1>{calculatorSelector}</h1>;
};

export default CalculatorScreen;