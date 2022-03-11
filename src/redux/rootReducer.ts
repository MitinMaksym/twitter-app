import { combineReducers } from "@reduxjs/toolkit";
import tagsSlice from "./ducks/tags/tagsSlice";
import tweetsSlice from "./ducks/tweets/tweetsSlice";

const rootReducer = combineReducers({
  tweets: tweetsSlice,
  tags: tagsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
