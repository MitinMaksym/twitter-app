import { call, put, takeEvery } from "redux-saga/effects";
import { tagsApi } from "../../../api/tagsApi";
import { fetchTags, setLoading, setTags, Tag } from "./tagsSlice";

export function* fetchTagsRequest() {
  try {
    const items: Tag[] = yield call(tagsApi.fetchTags);
    yield put(setTags(items));
    yield put(setLoading(false));
  } catch (err) {
    yield put(setLoading(false));
    console.log(err);
  }
}

export function* tagsSaga() {
  yield takeEvery(fetchTags.type, fetchTagsRequest);
}
