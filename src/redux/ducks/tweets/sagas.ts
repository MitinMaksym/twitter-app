import { call, put, takeEvery } from "redux-saga/effects";
import { tweetsApi } from "../../../api/tweetsApi";
import { getTweets, Tweet } from "./tweetsSlice";

export function* fetchTweetsRequest() {
  const items: Tweet[] = yield call(tweetsApi.fetchTweets);
  debugger;
  yield put(getTweets(items));
}

export function* tweetsSaga() {
  yield takeEvery(getTweets.type, fetchTweetsRequest);
}
