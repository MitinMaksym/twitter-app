import { call, put, takeEvery } from "redux-saga/effects";
import { tweetsApi } from "../../../api/tweetsApi";
import { fetchTweets, setLoading, setTweets, Tweet } from "./tweetsSlice";

export function* fetchTweetsRequest() {
  try {
    const items: Tweet[] = yield call(tweetsApi.fetchTweets);
    yield put(setTweets(items));
    yield put(setLoading(false));
  } catch (err) {
    yield put(setLoading(false));
    console.log(err);
  }
}

export function* tweetsSaga() {
  yield takeEvery(fetchTweets.type, fetchTweetsRequest);
}
