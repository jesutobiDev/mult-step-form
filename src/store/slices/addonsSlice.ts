import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Addon {
  title: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  selected: boolean;
}

interface AddonsState {
  addons: Addon[];
}

const initialState: AddonsState = {
  addons: [
    {
      title: "Online Service",
      description: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
      selected: false,
    },
    {
      title: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
      selected: false,
    },
    {
      title: "Customizable Profile",
      description: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
      selected: false,
    },
  ],
};

const addonsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    toggleAddon: (state, action: PayloadAction<string>) => {
      const addon = state.addons.find((a) => a.title === action.payload);
      if (addon) {
        addon.selected = !addon.selected;
      }
    },
  },
});

export const { toggleAddon } = addonsSlice.actions;
export default addonsSlice.reducer;
