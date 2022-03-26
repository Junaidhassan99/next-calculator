import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { RootState } from "./store";

//import { getDefaultMiddleware } from '@reduxjs/toolkit';

const initialIsShiftSelectedState = false;
const initialIsHypSelectedState = false;

enum ButtonKind {
  //has one input and one output
  Function,
  //is from 0-9 and .
  Number,
  //has two inputs and one output
  Operator,
  //special operations and show nothing on the screen eg: backspace
  //can be renamed to screen operation
  ScreenOperation,
  //constants
  Constant,
}

function factorialize(num: number) {
  var result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

function getButtonKeysOnShift(
  isShiftSelected: boolean,
  isHypSelected: boolean
): ButtonKeyType[] {
  let buttonKeyPlaceHolder: ButtonKeyType[] = [
    {
      text: "sin(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.sin(input[0]);
        //uk
      },
    },
    {
      text: "inv(sin(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "sinh(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.sin(input[0]);
        //uk
      },
    },
    {
      text: "inv(sinh(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "cosec(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.sin(input[0]);
        //uk
      },
    },

    {
      text: "inv(cosec(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "cosech(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.sin(input[0]);
        //uk
      },
    },

    {
      text: "inv(cosech(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "cos(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.cos(input[0]);
        //uk
      },
    },
    {
      text: "inv(cos(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "cosh(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.cos(input[0]);
        //uk
      },
    },
    {
      text: "inv(cosh(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "inv(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / input[0];
        //uk
      },
    },
    {
      text: "tan(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.tan(input[0]);
        //uk
      },
    },

    {
      text: "inv(tan(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "tanh(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.tan(input[0]);
        //uk
      },
    },

    {
      text: "inv(tanh(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "cot(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.tan(input[0]);
        //uk
      },
    },

    {
      text: "inv(cot(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "coth(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.tan(input[0]);
        //uk
      },
    },

    {
      text: "inv(coth(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "sec(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.cos(input[0]);
        //uk
      },
    },

    {
      text: "inv(sec(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "sech(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.cos(input[0]);
        //uk
      },
    },

    {
      text: "inv(sech(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
    },
    {
      text: "!",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return factorialize(input[0]);
        //uk
      },
    },
    {
      text: "^2",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.pow(input[0], 2);
      },
    },
    {
      text: "^3",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.pow(input[0], 3);
      },
    },

    {
      text: "log(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.log10(input[0]);
        //uk
      },
    },
    {
      text: "10^(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.pow(10, input[0]);
        //uk
      },
    },
    {
      text: "ln(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.log(input[0]);
        //uk
      },
    },
    {
      text: "e^(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.pow(Math.E, input[0]);
        //uk
      },
    },
    {
      text: "abs(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.abs(input[0]);
        //uk
      },
    },

    {
      text: "sqrt(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.sqrt(input[0]);
        //uk
      },
    },
    {
      text: "^",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Operator,
      calculateResult: (input: number[]) => {
        return Math.pow(input[0], input[1]);
      },
    },
    {
      text: "%",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Operator,
      calculateResult: (input: number[]) => {
        return input[0] % input[1];
      },
    },
    {
      text: "backspace",
      isActive: true,
      isVisible: true,
      isHeightDouble: true,
      buttonKind: ButtonKind.ScreenOperation,
    },
    {
      text: "shift",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.ScreenOperation,
      isHeightDouble: true,
    },
    {
      text: "hyp",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.ScreenOperation,
      calculateResult: (input: number[]) => {
        return 0.0;
        //uk
      },
      isHeightDouble: true,
    },

    {
      text: "CE",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.ScreenOperation,
    },
    {
      text: "C",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.ScreenOperation,
    },
    {
      text: "pi",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Constant,
      constantValue: Math.PI,
    },
    {
      text: "e",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Constant,
      constantValue: Math.E,
    },

    // {
    //   text: "(",
    //   isActive: true,
    //   isVisible: true,
    // },
    // {
    //   text: ")",
    //   isActive: true,
    //   isVisible: true,
    // },

    {
      text: "7",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: "8",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: "9",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: "/",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Operator,
      calculateResult: (input: number[]) => {
        return input[0] / input[1];
      },
    },
    {
      text: "4",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: "5",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: "6",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: "*",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Operator,
      calculateResult: (input: number[]) => {
        return input[0] * input[1];
      },
    },
    {
      text: "1",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: "2",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: "3",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: "-",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Operator,
      calculateResult: (input: number[]) => {
        return input[0] - input[1];
      },
    },
    {
      text: "0",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: ".",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
      buttonKind: ButtonKind.Number,
    },
    {
      text: "=",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.ScreenOperation,
    },
    {
      text: "+",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Operator,
      calculateResult: (input: number[]) => {
        return input[0] + input[1];
      },
    },
  ];

  //isShiftSelected === true
  const setVisibilityForInvF = [
    "inv(sin(x))",
    "inv(cos(x))",
    "inv(tan(x))",
    "inv(cosec(x))",
    "inv(sec(x))",
    "inv(cot(x))",
  ];

  //isShiftSelected === false
  const setVisibilityForF = [
    "sin(x)",
    "cos(x)",
    "tan(x)",
    "cosec(x)",
    "sec(x)",
    "cot(x)",
  ];

  //isHypSelected === true
  const setVisibilityForInvH = [
    "inv(sinh(x))",
    "inv(cosh(x))",
    "inv(tanh(x))",
    "inv(cosech(x))",
    "inv(sech(x))",
    "inv(coth(x))",
  ];

  //isHypSelected === false
  const setVisibilityForH = [
    "sinh(x)",
    "cosh(x)",
    "tanh(x)",
    "cosech(x)",
    "sech(x)",
    "coth(x)",
  ];

  function setVisibility(mText: string) {
    const indexOfItem = buttonKeyPlaceHolder
      .map((item) => item.text)
      .indexOf(mText);

    buttonKeyPlaceHolder[indexOfItem].isVisible =
      !buttonKeyPlaceHolder[indexOfItem].isVisible;
  }

  if (!isShiftSelected && !isHypSelected) {
    //make inv(f) invisible
    setVisibilityForInvF.forEach((mText) => {
      setVisibility(mText);
    });

    //make hyp(f) invisible
    setVisibilityForH.forEach((mText) => {
      setVisibility(mText);
    });

    //make inv(hyp(f)) invisible
    setVisibilityForInvH.forEach((mText) => {
      setVisibility(mText);
    });
  } else if (isShiftSelected && isHypSelected) {
    //make inv(f) invisible
    setVisibilityForInvF.forEach((mText) => {
      setVisibility(mText);
    });

    //make hyp(f) invisible
    setVisibilityForH.forEach((mText) => {
      setVisibility(mText);
    });

    //make inv(hyp(f)) invisible
    setVisibilityForF.forEach((mText) => {
      setVisibility(mText);
    });
  } else if (!isShiftSelected && isHypSelected) {
    //make inv(f) invisible
    setVisibilityForInvF.forEach((mText) => {
      setVisibility(mText);
    });

    //make hyp(f) invisible
    setVisibilityForF.forEach((mText) => {
      setVisibility(mText);
    });

    //make inv(hyp(f)) invisible
    setVisibilityForInvH.forEach((mText) => {
      setVisibility(mText);
    });
  } else {
    //make inv(f) invisible
    setVisibilityForH.forEach((mText) => {
      setVisibility(mText);
    });

    //make hyp(f) invisible
    setVisibilityForF.forEach((mText) => {
      setVisibility(mText);
    });

    //make inv(hyp(f)) invisible
    setVisibilityForInvH.forEach((mText) => {
      setVisibility(mText);
    });
  }

  return buttonKeyPlaceHolder;
}

export type ButtonKeyType = {
  //id: string;
  text: string;
  //make components unclickable
  isActive: boolean;
  //remove components from screen
  isVisible: boolean;
  buttonKind: ButtonKind;
  //explicitly make a component big
  isHeightDouble?: boolean;
  allowBackSpace?: boolean;
  constantValue?: number;
  calculateResult?: (input: number[]) => number;
  //calculateResult?: () => void;
};

// Define a type for the slice state
type CalculatorState = {
  screenText: string;
  isShiftSelected: boolean;
  isHypSelected: boolean;
  buttonKeys: ButtonKeyType[];
};

// Define the initial state using that type
const initialState: CalculatorState = {
  screenText: "0",
  isShiftSelected: initialIsShiftSelectedState,
  isHypSelected: initialIsHypSelectedState,
  buttonKeys: getButtonKeysOnShift(
    initialIsShiftSelectedState,
    initialIsHypSelectedState
  ),
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateScreenText(state, action: PayloadAction<string>) {
      state.screenText = action.payload;
    },
    setAvalibility(state, actions: PayloadAction<string>) {
      const indexToUpdate = state.buttonKeys
        .map((items) => items.text)
        .indexOf(actions.payload);

      state.buttonKeys[indexToUpdate].isActive =
        !state.buttonKeys[indexToUpdate].isActive;
    },
    handlerForKeys(state, actions: PayloadAction<ButtonKeyType>) {
      function getOperatorKeys() {
        let operators: string[] = [];

        //get a list of all operators
        state.buttonKeys.forEach((item) => {
          if (item.buttonKind === ButtonKind.Operator) {
            operators.push(item.text);
          }
        });

        return operators;
      }

      function calculateOperatorResult() {
        let result = 0.0;
        if (isNaN(+state.screenText)) {
          //two inputs
          const operator = getOperatorKeys().filter((v) =>
            state.screenText.includes(v)
          )[0];

          const a = state.screenText.substring(
            0,
            state.screenText.indexOf(operator)
          );

          const b = state.screenText.substring(
            state.screenText.indexOf(operator) + 1
          );

          console.log(`a: ${a} b: ${b} operator: ${operator}`);

          const mItem = state.buttonKeys.find((item) => item.text === operator);

          if (mItem?.calculateResult !== undefined) {
            result = mItem?.calculateResult([+a, +b]);
          }
        } else {
          //one input

          const n = state.screenText;

          console.log(`n: ${n}`);

          const mItem = state.buttonKeys.find(
            (item) => item.text === actions.payload.text
          );

          if (mItem?.calculateResult !== undefined) {
            result = mItem?.calculateResult([+n]);
          }
        }

        return result;
      }

      function getLastNumberFromScreen() {
        const operatorOnScreen = getOperatorKeys().filter((v) =>
          state.screenText.includes(v)
        )[0];

        const lastNumberWithPoint =
          operatorOnScreen === undefined
            ? state.screenText
            : state.screenText.substring(
                state.screenText.indexOf(operatorOnScreen) + 1
              );

        return lastNumberWithPoint;
      }

      if (actions.payload.buttonKind === ButtonKind.Number) {
        if (state.screenText === "0" && actions.payload.text !== ".") {
          state.screenText = actions.payload.text;
        } else if (actions.payload.text === ".") {
          if (!getLastNumberFromScreen().includes(".")) {
            state.screenText += actions.payload.text;
          }
        } else {
          state.screenText += actions.payload.text;
        }
      } else if (actions.payload.buttonKind === ButtonKind.Operator) {
        if (!getOperatorKeys().some((v) => state.screenText.includes(v))) {
          //if there is no operator already used
          state.screenText += actions.payload.text;
        } else {
          //calculate operator result
          state.screenText = `${calculateOperatorResult()}${
            actions.payload.text
          }`;
        }
      } else if (
        actions.payload.buttonKind === ButtonKind.Constant &&
        actions.payload.constantValue !== undefined
      ) {
        if (state.screenText === "0") {
          state.screenText = actions.payload.constantValue.toString();
        } else {
          if (!getLastNumberFromScreen().includes(".")) {
            state.screenText += actions.payload.constantValue.toString();
          }
        }
      } else if (actions.payload.buttonKind === ButtonKind.Function) {
        //calculate operator result
        state.screenText = calculateOperatorResult().toString();

        //then perform function operation here
      } else if (actions.payload.buttonKind === ButtonKind.ScreenOperation) {
        switch (actions.payload.text) {
          case "shift": {
            //toogle keys on shift
            state.isShiftSelected = !state.isShiftSelected;

            state.buttonKeys = getButtonKeysOnShift(
              state.isShiftSelected,
              state.isHypSelected
            );

            break;
          }
          case "hyp": {
            //toogle keys on shift
            state.isHypSelected = !state.isHypSelected;

            state.buttonKeys = getButtonKeysOnShift(
              state.isShiftSelected,
              state.isHypSelected
            );

            break;
          }
          case "backspace": {
            //remove last character
            state.buttonKeys.forEach((item) => {
              if (state.screenText.endsWith(item.text) && item.allowBackSpace) {
                state.screenText = state.screenText.slice(0, -item.text.length);

                if (state.screenText.length === 0) {
                  state.screenText = "0";
                }
              }
            });

            break;
          }
          case "CE": {
            //removes last number
            const matches = state.screenText.match(/\d+$/);

            if (matches !== null) {
              state.screenText = state.screenText.slice(0, -matches[0].length);
            }

            if (state.screenText.length === 0) {
              state.screenText = "0";
            }

            break;
          }
          case "C": {
            //clear everything on screen

            state.screenText = "0";

            break;
          }
          case "=": {
            //calculate operator result
            state.screenText = calculateOperatorResult().toString();

            break;
          }
          default: {
            //do nothing
            break;
          }
        }
      } else {
        //do nothing or handle none type later
      }
    },
  },
});

export const { setAvalibility, handlerForKeys, updateScreenText } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
