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
      text: "sin",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.sin(input[0]);
      },
    },
    {
      text: "sin-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.asin(input[0]);
      },
    },
    {
      text: "sinh",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.sinh(input[0]);
      },
    },
    {
      text: "sinh-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.asinh(input[0]);
      },
    },
    {
      text: "cosec",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.sin(input[0]);
      },
    },

    {
      text: "cosec-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.asin(input[0]);
      },
    },
    {
      text: "cosech",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.sinh(input[0]);
      },
    },

    {
      text: "cosech-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.asinh(input[0]);
      },
    },
    {
      text: "cos",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.cos(input[0]);
      },
    },
    {
      text: "cos-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.acos(input[0]);
      },
    },
    {
      text: "cosh",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.cosh(input[0]);
      },
    },
    {
      text: "cosh-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.acosh(input[0]);
      },
    },
    {
      text: "inv",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / input[0];
      },
    },
    {
      text: "tan",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.tan(input[0]);
      },
    },

    {
      text: "tan-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.atan(input[0]);
      },
    },
    {
      text: "tanh",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.tanh(input[0]);
      },
    },

    {
      text: "tanh-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.atanh(input[0]);
      },
    },
    {
      text: "cot",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.tan(input[0]);
      },
    },

    {
      text: "cot-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.atan(input[0]);
      },
    },
    {
      text: "coth",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.tanh(input[0]);
      },
    },

    {
      text: "coth-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.atanh(input[0]);
      },
    },
    {
      text: "sec",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.cos(input[0]);
      },
    },

    {
      text: "sec-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.acos(input[0]);
      },
    },
    {
      text: "sech",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.cosh(input[0]);
      },
    },

    {
      text: "sech-1",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return 1 / Math.acosh(input[0]);
      },
    },
    {
      text: "ln",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.log(input[0]);
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
      text: "log",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.log10(input[0]);
      },
    },
    {
      text: "10^",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.pow(10, input[0]);
      },
    },

    {
      text: "backspace",
      isActive: true,
      isVisible: true,
      //isHeightDouble: true,
      buttonKind: ButtonKind.ScreenOperation,
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
      text: "%",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Operator,
      calculateResult: (input: number[]) => {
        return input[0] % input[1];
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
      text: "e^",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.pow(Math.E, input[0]);
      },
    },

    {
      text: "abs",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.abs(input[0]);
      },
    },

    {
      text: "sqrt",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return Math.sqrt(input[0]);
      },
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
      text: "!",
      isActive: true,
      isVisible: true,
      isHeightDouble: true,
      buttonKind: ButtonKind.Function,
      calculateResult: (input: number[]) => {
        return factorialize(input[0]);
      },
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
    "sin-1",
    "cos-1",
    "tan-1",
    "cosec-1",
    "sec-1",
    "cot-1",
  ];

  //isShiftSelected === false
  const setVisibilityForF = ["sin", "cos", "tan", "cosec", "sec", "cot"];

  //isHypSelected === true
  const setVisibilityForInvH = [
    "sinh-1",
    "cosh-1",
    "tanh-1",
    "cosech-1",
    "sech-1",
    "coth-1",
  ];

  //isHypSelected === false
  const setVisibilityForH = ["sinh", "cosh", "tanh", "cosech", "sech", "coth"];

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
      console.log(actions.payload);

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

          const mItem = state.buttonKeys.find((item) => item.text === operator);

          if (mItem?.calculateResult !== undefined) {
            result = mItem?.calculateResult([+a, +b]);
          }
        } else {
          //one input

          const n = state.screenText;

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
