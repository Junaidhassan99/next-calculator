import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type ButtonKeyType = { id: string; text: string; isActive: boolean };

// Define a type for the slice state
type CalculatorState = {
  screenText: string;
  buttonKeys: ButtonKeyType[];
};

// Define the initial state using that type
const initialState: CalculatorState = {
  screenText: "0",
  buttonKeys: [
    {
      id: "k-0",
      text: "0",
      isActive: true,
    },
    {
      id: "k-1",
      text: "1",
      isActive: true,
    },
    {
      id: "k-2",
      text: "2",
      isActive: true,
    },
    {
      id: "k-3",
      text: "3",
      isActive: true,
    },
    {
      id: "k-4",
      text: "4",
      isActive: true,
    },
    {
      id: "k-5",
      text: "5",
      isActive: true,
    },
    {
      id: "k-6",
      text: "6",
      isActive: true,
    },
    {
      id: "k-7",
      text: "7",
      isActive: true,
    },
    {
      id: "k-8",
      text: "8",
      isActive: true,
    },
    {
      id: "k-9",
      text: "9",
      isActive: true,
    },
  ],
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setAvalibility(state, actions: PayloadAction<string>) {
      //console.log(`test1: ${actions.payload}`);

      const indexToUpdate = state.buttonKeys
        .map((items) => items.id)
        .indexOf(actions.payload);

      //state.screenText = actions.payload;
      state.buttonKeys[indexToUpdate].isActive =
        !state.buttonKeys[indexToUpdate].isActive;
    },
  },
});

export const { setAvalibility } = calculatorSlice.actions;
export default calculatorSlice.reducer;
