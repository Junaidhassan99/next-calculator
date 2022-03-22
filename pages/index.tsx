import React, { Fragment, useState } from "react";
import CalclatorButton from "../components/CalculatorButton";
import CalculatorScreen from "../components/CalculatorScreen";
import { setAvalibility } from "../store/calculator-slice";

import { useAppSelector, useAppDispatch } from "../store/hooks";

import classes from "../styles/calculator-home-screen.module.css";

const Home = () => {
  const calculatorSelector = useAppSelector((state) => state.calculator);
  const calculatorDispatch = useAppDispatch();

  return (
    <div
      className={`${classes["calculator-page-body"]} ${classes["calculator-page-container"]}`}
    >
      <div>
        <CalculatorScreen />
      </div>
      <div className={classes["button-container"]}>
        <div className={classes["button-container-flex-grow-left"]}>
          <div
            className={`${classes["button-container-grid"]} ${classes["button-container-grid-top"]}`}
          >
            {calculatorSelector.buttonKeys.slice(0, 22).map((item) => (
              <CalclatorButton key={item.text} buttonKey={item} />
            ))}
          </div>
          <div
            className={`${classes["button-container-grid"]} ${classes["button-container-grid-bottom"]}`}
          >
            {calculatorSelector.buttonKeys
              .slice(33, calculatorSelector.buttonKeys.length)
              .map((item) => (
                <CalclatorButton key={item.text} buttonKey={item} />
              ))}
          </div>
        </div>
        <div className={classes["button-container-flex-grow-right"]}>
          <div
            className={`${classes["button-container-grid"]} ${
              classes["button-container-grid-right"]
            } ${
              calculatorSelector.isShiftSelected &&
              classes["button-container-grid-right-shift"]
            }`}
          >
            {calculatorSelector.buttonKeys.slice(22, 33).map((item) => (
              <CalclatorButton key={item.text} buttonKey={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;