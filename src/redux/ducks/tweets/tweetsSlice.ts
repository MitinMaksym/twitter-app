import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

export type Tweet = {
  _id: string;
  text: string;
  user: User;
};

type InitialState = {
  items: Tweet[];
  loading: boolean;
};

const initialState = {
  items: [],
  loading: false,
} as InitialState;

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    fetchTweets(state) {
      state.loading = true;
    },
    setTweets(state, action: PayloadAction<Tweet[]>) {
      state.items = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { fetchTweets, setTweets, setLoading } = tweetsSlice.actions;

export default tweetsSlice.reducer;
