import { configureStore } from '@reduxjs/toolkit';
import planReducer from "./slices/planSlice";
import addonsReducer from "./slices/addonsSlice";
import personalInfoReducer from "./slices/personalInfoSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      plan: planReducer,
      addons: addonsReducer,
      personalInfo: personalInfoReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
