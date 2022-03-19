import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

class ButtonKey {
  id: string;
  text: string;
  isActive: boolean;

  constructor(id: string, text: string, isActive: boolean) {
    this.id = id;
    this.text = text;
    this.isActive = isActive;
  }
}

// Define a type for the slice state
interface CalculatorState {
  screenText: string;
  buttonKeys: ButtonKey[];
}

// Define the initial state using that type
const initialState: CalculatorState = {
  screenText: "0",
  buttonKeys: [
    new ButtonKey("k-0", "0", true),
    new ButtonKey("k-1", "1", true),
    new ButtonKey("k-2", "2", true),
    new ButtonKey("k-3", "3", true),
    new ButtonKey("k-4", "4", true),
    new ButtonKey("k-5", "5", true),
    new ButtonKey("k-6", "6", true),
    new ButtonKey("k-7", "7", true),
    new ButtonKey("k-8", "8", true),
    new ButtonKey("k-9", "9", true),
  ],
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setAvalibility(state, actions: PayloadAction<string>) {
     

    },
  },
});

export const { setAvalibility } = calculatorSlice.actions;
export default calculatorSlice.reducer;
