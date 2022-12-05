import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterSlice {
  value: number;
}

const initialState: CounterSlice = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    setCounter(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { increment, setCounter } = counterSlice.actions;
export default counterSlice.reducer;
