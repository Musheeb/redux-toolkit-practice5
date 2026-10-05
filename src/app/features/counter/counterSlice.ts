import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByOne: (state) => {
      state.count += 1;
    },
    decrementByOne: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
    resetAll: (state) => {
      state.count = 0;
    },
  },
});

export const { incrementByOne, decrementByOne, incrementByValue, resetAll } =
  counterSlice.actions;

export default counterSlice.reducer;
