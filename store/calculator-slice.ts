import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialIsShiftSelectedState = false;

function getButtonKeysOnShift(isShiftSelected: boolean): ButtonKeyType[] {
  let buttonKeyPlaceHolder: ButtonKeyType[] = [
    {
      text: "sin",
      isActive: true,
      isVisible: true,
    },
    {
      text: "inv(sin)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "cosec",
      isActive: true,
      isVisible: true,
    },

    {
      text: "inv(cosec)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "cos",
      isActive: true,
      isVisible: true,
    },
    {
      text: "inv(cos)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "sec",
      isActive: true,
      isVisible: true,
    },

    {
      text: "inv(sec)",
      isActive: true,
      isVisible: true,
    },

    {
      text: "tan",
      isActive: true,
      isVisible: true,
    },

    {
      text: "inv(tan)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "cot",
      isActive: true,
      isVisible: true,
    },

    {
      text: "inv(cot)",
      isActive: true,
      isVisible: true,
    },
    {
      text: "x^2",
      isActive: true,
      isVisible: true,
    },
    {
      text: "x^3",
      isActive: true,
      isVisible: true,
    },
    {
      text: "inv",
      isActive: true,
      isVisible: true,
    },
    {
      text: "x!",
      isActive: true,
      isVisible: true,
    },
    {
      text: "log",
      isActive: true,
      isVisible: true,
    },
    {
      text: "10^x",
      isActive: true,
      isVisible: true,
    },
    {
      text: "ln",
      isActive: true,
      isVisible: true,
    },
    {
      text: "e^x",
      isActive: true,
      isVisible: true,
    },
    {
      text: "abs",
      isActive: true,
      isVisible: true,
    },
    {
      text: "hyp",
      isActive: true,
      isVisible: true,
    },
    {
      text: "sqrt",
      isActive: true,
      isVisible: true,
    },
    {
      text: "^",
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
      text: "backspace",
      isActive: true,
      isVisible: true,
    },
    {
      text: "shift",
      isActive: true,
      isVisible: true,
    },
    {
      text: "(",
      isActive: true,
      isVisible: true,
    },
    {
      text: ")",
      isActive: true,
      isVisible: true,
    },
    {
      text: "mod",
      isActive: true,
      isVisible: true,
      isHeightDouble: true,
    },
    {
      text: "7",
      isActive: true,
      isVisible: true,
    },
    {
      text: "8",
      isActive: true,
      isVisible: true,
    },
    {
      text: "9",
      isActive: true,
      isVisible: true,
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
    },
    {
      text: "5",
      isActive: true,
      isVisible: true,
    },
    {
      text: "6",
      isActive: true,
      isVisible: true,
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
    },
    {
      text: "2",
      isActive: true,
      isVisible: true,
    },
    {
      text: "3",
      isActive: true,
      isVisible: true,
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
    },
    {
      text: ".",
      isActive: true,
      isVisible: true,
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
    "inv(sin)",
    "inv(cos)",
    "inv(tan)",
    "inv(cosec)",
    "inv(sec)",
    "inv(cot)",
  ];

  //actions.payload === false
  const setVisibilityForShiftUnSelected = [
    "sin",
    "cos",
    "tan",
    "cosec",
    "sec",
    "cot",
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
  isHeightDouble?: boolean;
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
  },
});

export const { setAvalibility, onShiftClick } = calculatorSlice.actions;
export default calculatorSlice.reducer;
