import { configureStore } from "@reduxjs/toolkit";

import calculatorReducer from "./calculator-slice";
import routeReducer from "./route-slice";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    route: routeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
