import { createSlice } from "@reduxjs/toolkit";

export interface QuoteState {
  global: number;
  universal: number;
}

const initialState: QuoteState = {
  global: 0,
  universal: 0,
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    quote: (state, action) => {
      state.global = action.payload.global;
      state.universal = action.payload.universal;
    },
  },
});

const { actions, reducer } = quoteSlice;
export const { quote } = actions;
export default reducer;
