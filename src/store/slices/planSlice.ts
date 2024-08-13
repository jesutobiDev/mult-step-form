import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import arcade from "../../../public/assets/images/icon-arcade.svg"
import advaced from "../../../public/assets/images/icon-advanced.svg"
import pro from "../../../public/assets/images/icon-pro.svg"

interface Plan {
  icon: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

interface PlanState {
  plans: Plan[];
  selectedPlan: string;
  planDuration: "monthly" | "yearly";
}


const initialState: PlanState = {
  plans: [
    {
      icon : arcade,
      name: "Arcade",
      price: {
        monthly: 9,
        yearly: 90,
      },
    },
    {
      icon: advaced, 
      name: "Advanced",
      price: {
        monthly: 12,
        yearly: 120,
      },
    },
    {
      icon: pro,
      name: "Pro",
      price: {
        monthly: 15,
        yearly: 150,
      },
    },
  ],
  selectedPlan: "Arcade",
  planDuration: "monthly",
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan(state, action: PayloadAction<string>) {
      state.selectedPlan = action.payload;
    },
    setPlanDuration(state, action: PayloadAction<"monthly" | "yearly">) {
      state.planDuration = action.payload;
    },
  },
});

export const { setPlan, setPlanDuration } = planSlice.actions;
export default planSlice.reducer;
