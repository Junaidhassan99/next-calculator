import Head from "next/head";
import React, { Fragment, useState } from "react";
import AppBar from "../components/AppBar";
import CalclatorButton from "../components/CalculatorButton";
import CalculatorScreen from "../components/CalculatorScreen";
import Drawer from "../components/Drawer";
import { setAvalibility } from "../store/calculator-slice";

import { useAppSelector, useAppDispatch } from "../store/hooks";

// import classes from "../styles/calculator-home-screen.module.css";
// import "../styles/globals.css";

const ScientificPage = () => {
  const calculatorSelector = useAppSelector((state) => state.calculator);
  const calculatorDispatch = useAppDispatch();

  return (
    <Fragment>
      <Head>
        <title>Calculator</title>
      </Head>
      <div style={{color: "red"}}>ULTRRPPPP</div>
      <div className={"calculator-page-body calculator-page-container"}>
        <div className="default-elevation">
          <CalculatorScreen
            isShiftSelected={calculatorSelector.isShiftSelected}
          />
        </div>
        <div className={"button-container"}>
          <div className={"button-container-flex-grow-left"}>
            <div className={"button-container-grid button-container-grid-top"}>
              {calculatorSelector.buttonKeys.slice(0, 30).map((item) => (
                <CalclatorButton key={item.text} buttonKey={item} />
              ))}
            </div>

            <div
              className={"button-container-grid button-container-grid-middle"}
            >
              {calculatorSelector.buttonKeys.slice(30, 34).map((item) => (
                <CalclatorButton key={item.text} buttonKey={item} />
              ))}
            </div>

            <div
              className={"button-container-grid button-container-grid-bottom"}
            >
              {calculatorSelector.buttonKeys
                .slice(43, calculatorSelector.buttonKeys.length)
                .map((item) => (
                  <CalclatorButton key={item.text} buttonKey={item} />
                ))}
            </div>
          </div>
          <div className={"button-container-flex-grow-right"}>
            <div
              className={`button-container-grid button-container-grid-right
               ${
                 calculatorSelector.isShiftSelected &&
                 "button-container-grid-right-shift"
               }`}
            >
              {calculatorSelector.buttonKeys.slice(34, 43).map((item) => (
                <CalclatorButton key={item.text} buttonKey={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ScientificPage;
