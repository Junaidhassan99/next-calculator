import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { RootState } from "./store";

const initialIsShiftSelectedState = false;

enum ButtonKind {
  //has one input and one output
  Function,
  //is from 0-9 and .
  Number,
  //has two inputs and one output
  Operator,
  //special operations and show nothing on the screen eg: backspace
  None,
  //constants
  Constant,
}

function getButtonKeysOnShift(isShiftSelected: boolean): ButtonKeyType[] {
  let buttonKeyPlaceHolder: ButtonKeyType[] = [
    {
      text: "sin(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "inv(sin(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "cosec(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },

    {
      text: "inv(cosec(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "cos(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "inv(cos(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "sec(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },

    {
      text: "inv(sec(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },

    {
      text: "tan(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },

    {
      text: "inv(tan(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "cot(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },

    {
      text: "inv(cot(x))",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "^2",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "^3",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "inv(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "!",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "log(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "10^(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "ln(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "e^(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "abs(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "hyp(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "sqrt(x)",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Function,
    },
    {
      text: "^",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Operator,
    },

    {
      text: "backspace",
      isActive: true,
      isVisible: true,
      isHeightDouble: true,
      buttonKind: ButtonKind.None,
    },
    {
      text: "shift",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.None,
    },
    {
      text: "CE",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.None,
    },
    {
      text: "C",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.None,
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
      text: "%",
      isActive: true,
      isVisible: true,
      isHeightDouble: true,
      buttonKind: ButtonKind.Operator,
    },
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
      buttonKind: ButtonKind.None,
    },
    {
      text: "+",
      isActive: true,
      isVisible: true,
      buttonKind: ButtonKind.Operator,
    },
  ];

  //actions.payload === true
  const setVisibilityForShiftSelected = [
    "inv(sin(x))",
    "inv(cos(x))",
    "inv(tan(x))",
    "inv(cosec(x))",
    "inv(sec(x))",
    "inv(cot(x))",
  ];

  //actions.payload === false
  const setVisibilityForShiftUnSelected = [
    "sin(x)",
    "cos(x)",
    "tan(x)",
    "cosec(x)",
    "sec(x)",
    "cot(x)",
  ];

  function setVisibility(mText: string) {
    const indexOfItem = buttonKeyPlaceHolder
      .map((item) => item.text)
      .indexOf(mText);

    buttonKeyPlaceHolder[indexOfItem].isVisible =
      !buttonKeyPlaceHolder[indexOfItem].isVisible;
  }

  if (!isShiftSelected) {
    setVisibilityForShiftSelected.forEach((mText) => {
      setVisibility(mText);
    });
  } else {
    setVisibilityForShiftUnSelected.forEach((mText) => {
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
};

// Define a type for the slice state
type CalculatorState = {
  screenText: string;
  isShiftSelected: boolean;
  buttonKeys: ButtonKeyType[];
};

// Define the initial state using that type
const initialState: CalculatorState = {
  screenText: "0",
  isShiftSelected: initialIsShiftSelectedState,
  buttonKeys: getButtonKeysOnShift(initialIsShiftSelectedState),
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setAvalibility(state, actions: PayloadAction<string>) {
      const indexToUpdate = state.buttonKeys
        .map((items) => items.text)
        .indexOf(actions.payload);

      state.buttonKeys[indexToUpdate].isActive =
        !state.buttonKeys[indexToUpdate].isActive;
    },
    onShiftClick(state) {
      state.isShiftSelected = !state.isShiftSelected;

      state.buttonKeys = getButtonKeysOnShift(state.isShiftSelected);
    },
    addTextToScreen(state, actions: PayloadAction<ButtonKeyType>) {
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
        const operatorOnScreen = getOperatorKeys().filter((v) =>
          state.screenText.includes(v)
        )[0];

        const a = state.screenText.substring(
          0,
          state.screenText.indexOf(operatorOnScreen)
        );

        const b = state.screenText.substring(
          state.screenText.indexOf(operatorOnScreen) + 1
        );

        console.log(`a: ${a} b: ${b} operator: ${operatorOnScreen}`);
      }

      if (actions.payload.buttonKind === ButtonKind.Number) {
        if (state.screenText === "0" && actions.payload.text !== ".") {
          state.screenText = actions.payload.text;
        } else if (actions.payload.text === ".") {
          const operatorOnScreen = getOperatorKeys().filter((v) =>
            state.screenText.includes(v)
          )[0];

          const lastNumberWithPoint =
            operatorOnScreen === undefined
              ? state.screenText
              : state.screenText.substring(
                  state.screenText.indexOf(operatorOnScreen) + 1
                );

          if (!lastNumberWithPoint.includes(".")) {
            state.screenText += actions.payload.text;
          }
        } else {
          state.screenText += actions.payload.text;
        }
      } else if (actions.payload.buttonKind === ButtonKind.Operator) {
        if (!getOperatorKeys().some((v) => state.screenText.includes(v))) {
          state.screenText += actions.payload.text;
        } else {
          //calculate operator result
          calculateOperatorResult();
        }
      } else if (
        actions.payload.buttonKind === ButtonKind.Constant &&
        actions.payload.constantValue !== undefined
      ) {
        if (state.screenText === "0") {
          state.screenText = actions.payload.constantValue.toString();
        } else {
          state.screenText += actions.payload.constantValue.toString();
        }
      } else if (actions.payload.buttonKind === ButtonKind.Function) {
        if (!isNaN(+state.screenText)) {
          //it is a single number, so apply function directly
        } else {
          //calculate operator result
          calculateOperatorResult();
        }
      } else {
        //do nothing or handle none type later
      }
    },
    removeFromScreen(state) {
      state.buttonKeys.forEach((item) => {
        if (state.screenText.endsWith(item.text) && item.allowBackSpace) {
          state.screenText = state.screenText.slice(0, -item.text.length);

          if (state.screenText.length === 0) {
            state.screenText = "0";
          }
        }
      });
    },
    clearLastNumber(state) {
      //CE
      const matches = state.screenText.match(/\d+$/);

      if (matches !== null) {
        state.screenText = state.screenText.slice(0, -matches[0].length);
      }

      if (state.screenText.length === 0) {
        state.screenText = "0";
      }
    },
    clearScreen(state) {
      //C

      state.screenText = "0";
    },
  },
});

export const {
  setAvalibility,
  onShiftClick,
  addTextToScreen,
  removeFromScreen,
  clearLastNumber,
  clearScreen,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
