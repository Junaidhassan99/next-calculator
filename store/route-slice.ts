import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { RootState } from "./store";

interface ActionType {
  title: string;
  path: string;
}

const actions: ActionType[] = [
  {
    title: "Scientific",
    path: "/scientific",
  },
  {
    title: "BMI",
    path: "/bmi",
  },
  {
    title: "Programmer",
    path: "/programmer",
  },
  {
    title: "Converter",
    path: "/converter",
  },
];

// Define a type for the slice state
type RouteState = {
  currentlySelectedRoute: string;
  actions: ActionType[];
};

// Define the initial state using that type
const initialState: RouteState = {
  currentlySelectedRoute: "/scientific",
  actions: actions,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<string>) => {
      state.currentlySelectedRoute = action.payload;
    },
  },
});

export const { setRoute } = routeSlice.actions;
export default routeSlice.reducer;
