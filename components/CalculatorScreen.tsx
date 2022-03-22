import { useCallback, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";

import classes from "../styles/calculator-home-screen.module.css";

const CalculatorScreen = () => {
  const calculatorSelector = useAppSelector(
    (state) => state.calculator.screenText
  );

  return (
    <div>
      <h1 className={classes["calculator-screen"]}>{calculatorSelector}</h1>
    </div>
  );
};

export default CalculatorScreen;
