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
    title: "About",
    path: "/about",
  },
];

// Define a type for the slice state
type RouteState = {
  currentlySelectedRoute: string;
  isDrawerOn: boolean;
  actions: ActionType[];
};

// Define the initial state using that type
const initialState: RouteState = {
  currentlySelectedRoute: "/scientific",
  isDrawerOn: false,
  actions: actions,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<string>) => {
      state.currentlySelectedRoute = action.payload;
    },
    toogleIsDrawerOn: (state) => {
      state.isDrawerOn = !state.isDrawerOn;
    },
  },
});

export const { setRoute, toogleIsDrawerOn } = routeSlice.actions;
export default routeSlice.reducer;
