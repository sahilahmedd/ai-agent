import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TemplateContent, TemplateStyles } from "../types/Template";

interface AppState {
  templateContent: TemplateContent | null;
  templateStyles: TemplateStyles | null;
  userName: string;
}

const initialState: AppState = {
  templateContent: null,
  templateStyles: null,
  userName: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTemplateContent(state, action: PayloadAction<TemplateContent>) {
      state.templateContent = action.payload;
    },
    setTemplateStyles(state, action: PayloadAction<TemplateStyles>) {
      state.templateStyles = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const { setTemplateContent, setTemplateStyles, setUserName } =
  appSlice.actions;
export default appSlice.reducer;
