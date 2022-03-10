import { combineReducers } from "@reduxjs/toolkit";
import tweetsSlice from "./ducks/tweets/tweetsSlice";

const rootReducer = combineReducers({
  tweets: tweetsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
