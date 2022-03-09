import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Tweet = {
  text: string;
  fullName: string;
  avatarUrl: string;
};

type InitialState = {
  items: Tweet[];
};

const initialState = {
  items: [],
} as InitialState;

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    getTweets(state, action: PayloadAction<Tweet[]>) {
      state.items = action.payload;
    },
  },
});

export const { getTweets } = tweetsSlice.actions;

export default tweetsSlice.reducer;
