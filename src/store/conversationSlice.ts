import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Message } from "../types/Message";

interface ConversationState {
  messages: Message[];
  isSpeaking: boolean;
  isMuted: boolean;
  isRecording: boolean;
}

const initialState: ConversationState = {
  messages: [],
  isSpeaking: false,
  isMuted: false,
  isRecording: false,
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
    setSpeaking(state, action: PayloadAction<boolean>) {
      state.isSpeaking = action.payload;
    },
    setMuted(state, action: PayloadAction<boolean>) {
      state.isMuted = action.payload;
    },
    setRecording(state, action: PayloadAction<boolean>) {
      state.isRecording = action.payload;
    },
    clearMessages(state) {
      state.messages = [];
    },
  },
});

export const {
  addMessage,
  setSpeaking,
  setMuted,
  setRecording,
  clearMessages,
} = conversationSlice.actions;
export default conversationSlice.reducer;
