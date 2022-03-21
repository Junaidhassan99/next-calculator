import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialIsShiftSelectedState = false;

function getButtonKeysOnShift(
  isShiftSelected: boolean
): { id: string; value: ButtonKeyType[] }[] {
  let buttonKeyGroupPlaceHolder: ButtonKeyGroupType[] = [
    {
      id: "k-0",
      value: [
        {
          text: "sin",
          isActive: true,
          isVisible: true,
        },
        {
          text: "cosec",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-1",
      value: [
        {
          text: "inv(sin)",
          isActive: true,
          isVisible: true,
        },
        {
          text: "inv(cosec)",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-2",
      value: [
        {
          text: "cos",
          isActive: true,
          isVisible: true,
        },
        {
          text: "sec",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-3",
      value: [
        {
          text: "inv(cos)",
          isActive: true,
          isVisible: true,
        },
        {
          text: "inv(sec)",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-4",
      value: [
        {
          text: "tan",
          isActive: true,
          isVisible: true,
        },

        {
          text: "cot",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-5",
      value: [
        {
          text: "inv(tan)",
          isActive: true,
          isVisible: true,
        },

        {
          text: "inv(cot)",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-6",
      value: [
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
      ],
    },
    {
      id: "k-7",
      value: [
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
      ],
    },
    {
      id: "k-8",
      value: [
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
      ],
    },
    {
      id: "k-9",
      value: [
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
      ],
    },
    {
      id: "k-10",
      value: [
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
      ],
    },
    {
      id: "k-11",
      value: [
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
      ],
    },
    {
      id: "k-12",
      value: [
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
      ],
    },

    {
      id: "k-14",
      value: [
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
      ],
    },

    {
      id: "k-13",
      value: [
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
      ],
    },

    {
      id: "k-16",
      value: [
        {
          text: "7",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-17",
      value: [
        {
          text: "8",
          isActive: true,
          isVisible: true,
        },
      ],
    },

    {
      id: "k-18",
      value: [
        {
          text: "9",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-19",
      value: [
        {
          text: "/",
          isActive: true,
          isVisible: true,
        },
      ],
    },

    {
      id: "k-22",
      value: [
        {
          text: "4",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-23",
      value: [
        {
          text: "5",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-24",
      value: [
        {
          text: "6",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-25",
      value: [
        {
          text: "*",
          isActive: true,
          isVisible: true,
        },
      ],
    },

    {
      id: "k-26",
      value: [
        {
          text: "1",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-27",
      value: [
        {
          text: "2",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-28",
      value: [
        {
          text: "3",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-29",
      value: [
        {
          text: "-",
          isActive: true,
          isVisible: true,
        },
      ],
    },

    {
      id: "k-30",
      value: [
        {
          text: "0",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-31",
      value: [
        {
          text: ".",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-32",
      value: [
        {
          text: "=",
          isActive: true,
          isVisible: true,
        },
      ],
    },
    {
      id: "k-33",
      value: [
        {
          text: "+",
          isActive: true,
          isVisible: true,
        },
      ],
    },
  ];

  //actions.payload === true
  const setVisibilityForShiftSelected = ["k-1", "k-3", "k-5"];

  //actions.payload === false
  const setVisibilityForShiftUnSelected = ["k-0", "k-2", "k-4"];

  function setVisibility(mId: string) {
    const indexOfItem = buttonKeyGroupPlaceHolder
      .map((item) => item.id)
      .indexOf(mId);

    buttonKeyGroupPlaceHolder[indexOfItem].value.forEach((item, index) => {
      buttonKeyGroupPlaceHolder[indexOfItem].value[index].isVisible =
        !buttonKeyGroupPlaceHolder[indexOfItem].value[index].isVisible;
    });
  }

  if (!isShiftSelected) {
    setVisibilityForShiftSelected.forEach((mId) => {
      setVisibility(mId);
    });
  } else {
    setVisibilityForShiftUnSelected.forEach((mId) => {
      setVisibility(mId);
    });
  }

  return buttonKeyGroupPlaceHolder;
}

export type ButtonKeyType = {
  //id: string;
  text: string;
  //make components unclickable
  isActive: boolean;
  //remove components from screen
  isVisible: boolean;
};

export type ButtonKeyGroupType = { id: string; value: ButtonKeyType[] };

// Define a type for the slice state
type CalculatorState = {
  screenText: string;
  isShiftSelected: boolean;
  buttonKeys: ButtonKeyGroupType[];
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
        .map((items) => items.id)
        .indexOf(actions.payload);

      state.buttonKeys[indexToUpdate].value.forEach((item, index) => {
        state.buttonKeys[indexToUpdate].value[index].isActive =
          !state.buttonKeys[indexToUpdate].value[index].isActive;
      });
    },
    onShiftClick(state) {
      state.isShiftSelected = !state.isShiftSelected;

      state.buttonKeys = getButtonKeysOnShift(state.isShiftSelected);
    },
  },
});

export const { setAvalibility, onShiftClick } = calculatorSlice.actions;
export default calculatorSlice.reducer;
