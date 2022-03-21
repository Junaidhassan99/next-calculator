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
    <Fragment>
      <CalculatorScreen />
      <div className={classes["button-container"]}>
        <div
          className={`${classes["button-container-grid-top"]} ${classes["button-container-item"]}`}
        >
          {calculatorSelector.buttonKeys.slice(0, 16).map((item) => (
            <CalclatorButton key={item.id} buttonKey={item} />
          ))}
        </div>
        <div className={`${classes["button-container-grid-bottom-left"]}`}>
          {calculatorSelector.buttonKeys.slice(16, 32).map((item) => (
            <CalclatorButton key={item.id} buttonKey={item} />
          ))}
        </div>
        <div className={`${classes["button-container-grid-bottom-left"]}`}>
          {calculatorSelector.buttonKeys.slice(32, 42).map((item) => (
            <CalclatorButton key={item.id} buttonKey={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
