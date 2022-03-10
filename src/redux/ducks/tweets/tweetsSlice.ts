import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Tweet = {
  text: string;
  fullName: string;
  avatarUrl: string;
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
