import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialIsShiftSelectedState = false;

function getButtonKeysOnShift(isShiftSelected: boolean): ButtonKeyType[] {
  let buttonKeyPlaceHolder: ButtonKeyType[] = [
    {
      text: "sin(x)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "inv(sin(x))",
      isActive: true,
      isVisible: true,
    },
    {
      text: "cosec(x)",
      isActive: true,
      isVisible: true,
    },

    {
      text: "inv(cosec(x))",
      isActive: true,
      isVisible: true,
    },
    {
      text: "cos(x)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "inv(cos(x))",
      isActive: true,
      isVisible: true,
    },
    {
      text: "sec(x)",
      isActive: true,
      isVisible: true,
    },

    {
      text: "inv(sec(x))",
      isActive: true,
      isVisible: true,
    },

    {
      text: "tan(x)",
      isActive: true,
      isVisible: true,
    },

    {
      text: "inv(tan(x))",
      isActive: true,
      isVisible: true,
    },
    {
      text: "cot(x)",
      isActive: true,
      isVisible: true,
    },

    {
      text: "inv(cot(x))",
      isActive: true,
      isVisible: true,
    },
    {
      text: "^2",
      isActive: true,
      isVisible: true,
    },
    {
      text: "^3",
      isActive: true,
      isVisible: true,
    },
    {
      text: "inv(x)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "!",
      isActive: true,
      isVisible: true,
    },
    {
      text: "log(x)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "10^(x)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "ln(x)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "e^(x)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "abs(x)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "hyp(x)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "sqrt(x)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "^",
      isActive: true,
      isVisible: true,
    },

    {
      text: "backspace",
      isActive: true,
      isVisible: true,
      isHeightDouble: true,
    },
    {
      text: "shift",
      isActive: true,
      isVisible: true,
    },
    {
      text: "CE",
      isActive: true,
      isVisible: true,
    },
    {
      text: "C",
      isActive: true,
      isVisible: true,
    },
    {
      text: "pi",
      isActive: true,
      isVisible: true,
    },
    {
      text: "e",
      isActive: true,
      isVisible: true,
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
      text: "mod(x)",
      isActive: true,
      isVisible: true,
      isHeightDouble: true,
    },
    {
      text: "7",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: "8",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: "9",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: "/",
      isActive: true,
      isVisible: true,
    },
    {
      text: "4",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: "5",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: "6",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: "*",
      isActive: true,
      isVisible: true,
    },
    {
      text: "1",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: "2",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: "3",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: "-",
      isActive: true,
      isVisible: true,
    },
    {
      text: "0",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: ".",
      isActive: true,
      isVisible: true,
      allowBackSpace: true,
    },
    {
      text: "=",
      isActive: true,
      isVisible: true,
    },
    {
      text: "+",
      isActive: true,
      isVisible: true,
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
  //explicitly make a component big
  isHeightDouble?: boolean;
  allowBackSpace?: boolean;
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
    addTextToScreen(state, actions: PayloadAction<string>) {
      if (state.screenText === "0") {
        state.screenText = actions.payload;
      } else {
        state.screenText += actions.payload;
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
