import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import conversationReducer from "./conversationSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    conversation: conversationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
