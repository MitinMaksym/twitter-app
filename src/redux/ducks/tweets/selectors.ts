import { RootState } from "../../rootReducer";

export const selectTweets = (state: RootState) => state.tweets.items;
