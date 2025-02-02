// src/store/index.tsx
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authSlice } from "../slice/auth";
import { targetApi } from "../api";
import matchSlice from "../slice/matchSlice";  // Import matchSlice directly
import { matchApi } from "../api/match";

export function makeStore() {
  return configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      match: matchSlice,  // Use matchSlice directly
      [matchApi.reducerPath]: matchApi.reducer,
      [targetApi.reducerPath]: targetApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        targetApi.middleware,
        matchApi.middleware
      ),
    devTools: true,
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
