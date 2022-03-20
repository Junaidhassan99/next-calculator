import React, { Fragment, useState } from "react";
import CalclatorButton from "../components/CalculatorButton";
import CalculatorScreen from "../components/CalculatorScreen";
import { setAvalibility } from "../store/calculator-slice";

import { useAppSelector, useAppDispatch } from "../store/hooks";

import classes from "../styles/calculator-home-screen.module.css";

const Home = () => {
  const calculatorSelector = useAppSelector((state) => state.calculator);
  const calculatorDispatch = useAppDispatch();

  console.log("test2");

  return (
    <Fragment>
      <CalculatorScreen />
      <div className={classes['button-container']}>
        {calculatorSelector.buttonKeys.map((item) => (
          <CalclatorButton key={item.id} buttonKey={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
