import React, { Fragment, useState } from "react";
import { setAvalibility } from "../store/calculator-slice";

import { useAppSelector, useAppDispatch } from "../store/hooks";

const Home = () => {
  const calculatorSelector = useAppSelector((state) => state.calculator);
  const calculatorDispatch = useAppDispatch();



  return (
    <Fragment>
      <h1>Home</h1>
    </Fragment>
  );
};

export default Home;
