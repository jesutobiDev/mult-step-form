import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  phone: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  phone: "",
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    updateSingleField: (
      state,
      action: PayloadAction<{ field: keyof UserState; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { updatePersonalInfo, updateSingleField } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
