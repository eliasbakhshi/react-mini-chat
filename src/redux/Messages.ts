import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type Message = {
  value: string;
  id: string;
  reaction: string;
};
type Reaction = {
  id: string;
  reaction: string;
};

export const Messages = createSlice({
  name: "messages",
  initialState: [] as Message[],
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.push(action.payload);
    },
    ChangeReaction: (state, action: PayloadAction<Reaction>) => {
      return state.map((message) => {
        if (message.id === action.payload.id) {
          return {
            ...message,
            reaction: action.payload.reaction,
          };
        }

        return message;
      });
    },
  },
});

export const { addMessage, ChangeReaction } = Messages.actions;
export const selectCount = (state: RootState) => state.messages;
export default Messages.reducer;
