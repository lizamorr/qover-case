import { configureStore } from "@reduxjs/toolkit";
import reducer from "./quoteSlice";

export const store = configureStore({ reducer: { quote: reducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
